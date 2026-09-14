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
from app.security import get_current_user
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

    # Create audit log for flag creation
    audit_log = AuditLog(
        action="CREATE_FLAG",
        performed_by=current_user.id,
        environment=None,
        old_value=None,
        new_value=str({
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
    current_user=Depends(get_current_user)
):
    feature_flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

    if not feature_flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Save old values before updating
    old_value = {
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

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

    # Save new values after updating
    new_value = {
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

    # Create audit log for update
    audit_log = AuditLog(
        action="UPDATE_FLAG",
        performed_by=current_user.id,
        environment=None,
        old_value=str(old_value),
        new_value=str(new_value)
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
    current_user=Depends(get_current_user)
):
    feature_flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == flag_id
    ).first()

    if not feature_flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Save flag details before deleting
    old_value = {
        "id": feature_flag.id,
        "key": feature_flag.key,
        "description": feature_flag.description,
        "type": feature_flag.type,
        "default_value": feature_flag.default_value,
        "enabled": feature_flag.enabled,
        "rollout_percentage": feature_flag.rollout_percentage,
        "owner_team": feature_flag.owner_team
    }

    # Save key for Redis cache invalidation
    flag_key = feature_flag.key

    # Create audit log for deletion
    audit_log = AuditLog(
        action="DELETE_FLAG",
        performed_by=current_user.id,
        environment=None,
        old_value=str(old_value),
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