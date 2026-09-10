from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.environment_override import EnvironmentOverride
from app.models.feature_flag import FeatureFlag
from app.models.environment import Environment
from app.schemas.environment_override import (
    EnvironmentOverrideCreate,
    EnvironmentOverrideResponse
)

from app.services.redis_cache import invalidate_flag_cache


router = APIRouter(
    prefix="/environment-overrides",
    tags=["Environment Overrides"]
)

# CREATE ENVIRONMENT OVERRIDE

@router.post(
    "/",
    response_model=EnvironmentOverrideResponse
)
def create_override(
    override: EnvironmentOverrideCreate,
    db: Session = Depends(get_db)
):

    # Check whether feature flag exists
    flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == override.flag_id
        )
        .first()
    )

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Check whether environment exists
    environment = (
        db.query(Environment)
        .filter(
            Environment.id == override.environment_id
        )
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    # Check if override already exists
    existing_override = (
        db.query(EnvironmentOverride)
        .filter(
            EnvironmentOverride.flag_id == override.flag_id,
            EnvironmentOverride.environment_id == override.environment_id
        )
        .first()
    )

    if existing_override:
        raise HTTPException(
            status_code=400,
            detail="Override already exists for this flag and environment"
        )

    # Create override
    new_override = EnvironmentOverride(
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        value=override.value
    )

    db.add(new_override)
    db.commit()
    db.refresh(new_override)

    # Invalidate Redis cache
    invalidate_flag_cache(flag.key)

    return new_override


# UPDATE ENVIRONMENT OVERRIDE

@router.put(
    "/{override_id}",
    response_model=EnvironmentOverrideResponse
)
def update_override(
    override_id: int,
    override: EnvironmentOverrideCreate,
    db: Session = Depends(get_db)
):

    # Find existing override
    existing_override = (
        db.query(EnvironmentOverride)
        .filter(
            EnvironmentOverride.id == override_id
        )
        .first()
    )

    if not existing_override:
        raise HTTPException(
            status_code=404,
            detail="Environment override not found"
        )

    # Check feature flag
    flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == override.flag_id
        )
        .first()
    )

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Check environment
    environment = (
        db.query(Environment)
        .filter(
            Environment.id == override.environment_id
        )
        .first()
    )

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    # Check duplicate override
    duplicate_override = (
        db.query(EnvironmentOverride)
        .filter(
            EnvironmentOverride.flag_id == override.flag_id,
            EnvironmentOverride.environment_id == override.environment_id,
            EnvironmentOverride.id != override_id
        )
        .first()
    )

    if duplicate_override:
        raise HTTPException(
            status_code=400,
            detail="Override already exists for this flag and environment"
        )

    # Store old flag ID in case flag association changes
    old_flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == existing_override.flag_id
        )
        .first()
    )

    # Update override
    existing_override.flag_id = override.flag_id
    existing_override.environment_id = override.environment_id
    existing_override.value = override.value

    db.commit()
    db.refresh(existing_override)

    # Invalidate cache for new flag
    invalidate_flag_cache(flag.key)

    # If the override was moved from another flag,
    # invalidate that flag's cache too
    if old_flag and old_flag.key != flag.key:
        invalidate_flag_cache(old_flag.key)

    return existing_override


# DELETE ENVIRONMENT OVERRIDE

@router.delete(
    "/{override_id}"
)
def delete_override(
    override_id: int,
    db: Session = Depends(get_db)
):

    # Find override
    existing_override = (
        db.query(EnvironmentOverride)
        .filter(
            EnvironmentOverride.id == override_id
        )
        .first()
    )

    if not existing_override:
        raise HTTPException(
            status_code=404,
            detail="Environment override not found"
        )

    # Find related feature flag before deleting
    flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == existing_override.flag_id
        )
        .first()
    )

    # Delete override
    db.delete(existing_override)
    db.commit()

    # Invalidate Redis cache
    if flag:
        invalidate_flag_cache(flag.key)

    return {
        "message": "Environment override deleted successfully"
    }