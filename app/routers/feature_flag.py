from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.feature_flag import FeatureFlag
from app.schemas.feature_flag import (
    FeatureFlagCreate,
    FeatureFlagUpdate,
    FeatureFlagResponse
)


router = APIRouter(
    prefix="/feature-flags",
    tags=["Feature Flags"]
)


@router.post("/", response_model=FeatureFlagResponse)
def create_feature_flag(
    feature_flag: FeatureFlagCreate,
    db: Session = Depends(get_db)
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
        owner_team=feature_flag.owner_team
    )

    db.add(new_flag)
    db.commit()
    db.refresh(new_flag)

    return new_flag


@router.get("/", response_model=list[FeatureFlagResponse])
def list_feature_flags(db: Session = Depends(get_db)):
    return db.query(FeatureFlag).all()


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


@router.put("/{flag_id}", response_model=FeatureFlagResponse)
def update_feature_flag(
    flag_id: int,
    flag_data: FeatureFlagUpdate,
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

    if flag_data.description is not None:
        feature_flag.description = flag_data.description

    if flag_data.type is not None:
        feature_flag.type = flag_data.type

    if flag_data.default_value is not None:
        feature_flag.default_value = flag_data.default_value

    if flag_data.enabled is not None:
        feature_flag.enabled = flag_data.enabled

    if flag_data.owner_team is not None:
        feature_flag.owner_team = flag_data.owner_team

    db.commit()
    db.refresh(feature_flag)

    return feature_flag


@router.delete("/{flag_id}")
def delete_feature_flag(
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

    db.delete(feature_flag)
    db.commit()

    return {
        "message": "Feature flag deleted successfully"
    }