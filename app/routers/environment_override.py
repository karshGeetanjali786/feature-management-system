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

router = APIRouter(
    prefix="/environment-overrides",
    tags=["Environment Overrides"]
)


@router.post("/", response_model=EnvironmentOverrideResponse)
def create_override(
    override: EnvironmentOverrideCreate,
    db: Session = Depends(get_db)
):
    # Check whether feature flag exists
    flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == override.flag_id
    ).first()

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Check whether environment exists
    environment = db.query(Environment).filter(
        Environment.id == override.environment_id
    ).first()

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    # Check if override already exists
    existing_override = db.query(EnvironmentOverride).filter(
        EnvironmentOverride.flag_id == override.flag_id,
        EnvironmentOverride.environment_id == override.environment_id
    ).first()

    if existing_override:
        raise HTTPException(
            status_code=400,
            detail="Override already exists for this flag and environment"
        )

    new_override = EnvironmentOverride(
        flag_id=override.flag_id,
        environment_id=override.environment_id,
        value=override.value
    )

    db.add(new_override)
    db.commit()
    db.refresh(new_override)

    return new_override