from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.user_group import UserGroup
from app.schemas.user_group import (
    UserGroupCreate,
    UserGroupUpdate,
    UserGroupResponse,
)

router = APIRouter(
    prefix="/groups",
    tags=["Groups"],
)


@router.get(
    "/",
    response_model=list[UserGroupResponse]
)
def get_groups(db: Session = Depends(get_db)):
    return db.query(UserGroup).order_by(UserGroup.id).all()


@router.get(
    "/{group_id}",
    response_model=UserGroupResponse
)
def get_group(
    group_id: int,
    db: Session = Depends(get_db)
):
    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found"
        )

    return group


@router.post(
    "/",
    response_model=UserGroupResponse,
    status_code=201
)
def create_group(
    group_data: UserGroupCreate,
    db: Session = Depends(get_db)
):
    group = UserGroup(
        group_name=group_data.group_name.strip()
    )

    db.add(group)

    try:
        db.commit()
        db.refresh(group)
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Group name already exists"
        )

    return group


@router.put(
    "/{group_id}",
    response_model=UserGroupResponse
)
def update_group(
    group_id: int,
    group_data: UserGroupUpdate,
    db: Session = Depends(get_db)
):
    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found"
        )

    group.group_name = group_data.group_name.strip()

    try:
        db.commit()
        db.refresh(group)
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Group name already exists"
        )

    return group


@router.delete("/{group_id}")
def delete_group(
    group_id: int,
    db: Session = Depends(get_db)
):
    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found"
        )

    db.delete(group)
    db.commit()

    return {
        "message": "Group deleted successfully"
    }