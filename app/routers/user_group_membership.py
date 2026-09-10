from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.user import User
from app.models.user_group import UserGroup
from app.models.user_group_membership import UserGroupMembership
from app.schemas.user_group_membership import UserGroupMembershipResponse
from app.schemas.user import UserResponse

router = APIRouter(
    prefix="/groups",
    tags=["Group Memberships"],
)


@router.post(
    "/{group_id}/users/{user_id}",
    response_model=UserGroupMembershipResponse,
    status_code=201,
)
def add_user_to_group(
    group_id: int,
    user_id: int,
    db: Session = Depends(get_db),
):
    # Check user
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    # Check group
    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found",
        )

    # Check duplicate membership
    existing_membership = db.query(
        UserGroupMembership
    ).filter(
        UserGroupMembership.user_id == user_id,
        UserGroupMembership.group_id == group_id,
    ).first()

    if existing_membership:
        raise HTTPException(
            status_code=400,
            detail="User is already a member of this group",
        )

    membership = UserGroupMembership(
        user_id=user_id,
        group_id=group_id,
    )

    db.add(membership)

    try:
        db.commit()
        db.refresh(membership)
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Could not add user to group",
        )

    return membership


@router.get(
    "/{group_id}/users",
    response_model=list[UserResponse]
)
def get_group_members(
    group_id: int,
    db: Session = Depends(get_db),
):
    group = db.query(UserGroup).filter(
        UserGroup.id == group_id
    ).first()

    if not group:
        raise HTTPException(
            status_code=404,
            detail="Group not found",
        )

    members = (
        db.query(User)
        .join(
            UserGroupMembership,
            User.id == UserGroupMembership.user_id,
        )
        .filter(
            UserGroupMembership.group_id == group_id
        )
        .all()
    )

    return members


@router.delete(
    "/{group_id}/users/{user_id}"
)
def remove_user_from_group(
    group_id: int,
    user_id: int,
    db: Session = Depends(get_db),
):
    membership = db.query(
        UserGroupMembership
    ).filter(
        UserGroupMembership.group_id == group_id,
        UserGroupMembership.user_id == user_id,
    ).first()

    if not membership:
        raise HTTPException(
            status_code=404,
            detail="User is not a member of this group",
        )

    db.delete(membership)
    db.commit()

    return {
        "message": "User removed from group successfully"
    }