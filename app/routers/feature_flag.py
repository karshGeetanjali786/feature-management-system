import json

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.feature_flag import FeatureFlag
from app.schemas.feature_flag import (
    FeatureFlagCreate,
    FeatureFlagUpdate,
    FeatureFlagResponse
)

from app.services.redis_cache import invalidate_flag_cache
from app.security import get_current_user, require_admin
from app.models.audit_log import AuditLog


router = APIRouter(
    prefix="/feature-flags",
    tags=["Feature Flags"]
)


# CREATE FEATURE FLAG

@router.post("/", response_model=FeatureFlagResponse)
def create_feature_flag(
    feature_flag: FeatureFlagCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    existing_flag = db.query(FeatureFlag).filter(
        FeatureFlag.key == feature_flag.key
    ).first()

    if existing_flag:
        raise HTTPException(
            status_code=400,
            detail="Feature flag already exists"
        )

    new_flag = FeatureFlag(
        key=feature_flag.key,
        description=feature_flag.description,
        type=feature_flag.type,
        default_value=feature_flag.default_value,
        enabled=feature_flag.enabled,
        rollout_percentage=feature_flag.rollout_percentage,
        owner_team=feature_flag.owner_team
    )

    db.add(new_flag)
    db.commit()
    db.refresh(new_flag)

    # Audit log for flag creation
    audit_log = AuditLog(
        action="CREATE_FLAG",
        performed_by=current_user.id,
        flag_id=new_flag.id,
        environment_id=None,
        environment=None,
        old_value=None,
        new_value=json.dumps({
            "id": new_flag.id,
            "key": new_flag.key,
            "description": new_flag.description,
            "type": new_flag.type,
            "default_value": new_flag.default_value,
            "enabled": new_flag.enabled,
            "rollout_percentage": new_flag.rollout_percentage,
            "owner_team": new_flag.owner_team
        })
    )

    db.add(audit_log)
    db.commit()

    return new_flag


# LIST ALL FEATURE FLAGS

@router.get("/", response_model=list[FeatureFlagResponse])
def list_feature_flags(
    db: Session = Depends(get_db)
):
    return db.query(FeatureFlag).all()


# GET SINGLE FEATURE FLAG

@router.get("/{flag_id}", response_model=FeatureFlagResponse)
def get_feature_flag(
    flag_id: int,
    db: Session = Depends(get_db)
):
    feature_flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

    if not feature_flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    return feature_flag


# UPDATE FEATURE FLAG

@router.put("/{flag_id}", response_model=FeatureFlagResponse)
def update_feature_flag(
    flag_id: int,
    flag_data: FeatureFlagUpdate,
    db: Session = Depends(get_db),
    # current_user=Depends(get_current_user)
    current_user=Depends(require_admin)
):
    feature_flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

    if not feature_flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Save old state before updating
    old_state = {
        "id": feature_flag.id,
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

    old_enabled = feature_flag.enabled
    old_rollout = feature_flag.rollout_percentage

    # Update fields
    if flag_data.description is not None:
        feature_flag.description = flag_data.description

    if flag_data.type is not None:
        feature_flag.type = flag_data.type

    if flag_data.default_value is not None:
        feature_flag.default_value = flag_data.default_value

    if flag_data.enabled is not None:
        feature_flag.enabled = flag_data.enabled

    if flag_data.rollout_percentage is not None:
        feature_flag.rollout_percentage = flag_data.rollout_percentage

    if flag_data.owner_team is not None:
        feature_flag.owner_team = flag_data.owner_team

    db.commit()
    db.refresh(feature_flag)

    # Save new state
    new_state = {
        "id": feature_flag.id,
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

   
    # 1. ENABLE / DISABLE AUDIT
    
    if old_enabled != feature_flag.enabled:

        action = (
            "ENABLE_FLAG"
            if feature_flag.enabled
            else "DISABLE_FLAG"
        )

        audit_log = AuditLog(
            action=action,
            performed_by=current_user.id,
            flag_id=feature_flag.id,
            environment_id=None,
            environment=None,
            old_value=json.dumps({
                "enabled": old_enabled
            }),
            new_value=json.dumps({
                "enabled": feature_flag.enabled
            })
        )

        db.add(audit_log)

   
    # 2. ROLLOUT CHANGE AUDIT

    if old_rollout != feature_flag.rollout_percentage:

        audit_log = AuditLog(
            action="ROLLOUT_CHANGED",
            performed_by=current_user.id,
            flag_id=feature_flag.id,
            environment_id=None,
            environment=None,
            old_value=json.dumps({
                "rollout_percentage": old_rollout
            }),
            new_value=json.dumps({
                "rollout_percentage": feature_flag.rollout_percentage
            })
        )

        db.add(audit_log)


    # 3. NORMAL FLAG UPDATE AUDIT

    normal_field_changed = (
        old_state["description"] != new_state["description"]
        or old_state["type"] != new_state["type"]
        or old_state["default_value"] != new_state["default_value"]
        or old_state["owner_team"] != new_state["owner_team"]
    )

    if normal_field_changed:

        audit_log = AuditLog(
            action="UPDATE_FLAG",
            performed_by=current_user.id,
            flag_id=feature_flag.id,
            environment_id=None,
            environment=None,
            old_value=json.dumps(old_state),
            new_value=json.dumps(new_state)
        )

        db.add(audit_log)

    db.commit()

    # Invalidate Redis cache
    invalidate_flag_cache(feature_flag.key)

    return feature_flag


# DELETE FEATURE FLAG

@router.delete("/{flag_id}")
def delete_feature_flag(
    flag_id: int,
    db: Session = Depends(get_db),
    # current_user=Depends(get_current_user)
    current_user=Depends(require_admin)
):
    feature_flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

    if not feature_flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Save flag state before deletion
    old_state = {
        "id": feature_flag.id,
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

    flag_key = feature_flag.key
    flag_id_value = feature_flag.id

    # Audit log for deletion
    audit_log = AuditLog(
        action="DELETE_FLAG",
        performed_by=current_user.id,
        flag_id=flag_id_value,
        environment_id=None,
        environment=None,
        old_value=json.dumps(old_state),
        new_value=None
    )

    db.add(audit_log)

    # Delete feature flag
    db.delete(feature_flag)
    db.commit()

    # Invalidate Redis cache
    invalidate_flag_cache(flag_key)

    return {
        "message": "Feature flag deleted successfully"
    }