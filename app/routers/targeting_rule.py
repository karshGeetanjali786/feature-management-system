from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.feature_flag import FeatureFlag
from app.models.targeting_rule import TargetingRule
from app.models.user import User
from app.models.user_group import UserGroup
from app.schemas.targeting_rule import (
    TargetingRuleCreate,
    TargetingRuleResponse,
)
from app.services.redis_cache import invalidate_flag_cache


router = APIRouter(
    prefix="/targeting-rules",
    tags=["Targeting Rules"],
)


# GET ALL TARGETING RULES

@router.get(
    "/",
    response_model=list[TargetingRuleResponse]
)
def get_targeting_rules(
    db: Session = Depends(get_db)
):
    return (
        db.query(TargetingRule)
        .order_by(TargetingRule.id)
        .all()
    )

# CREATE TARGETING RULE

@router.post(
    "/",
    response_model=TargetingRuleResponse,
    status_code=201
)
def create_targeting_rule(
    rule_data: TargetingRuleCreate,
    db: Session = Depends(get_db)
):

    # Check whether feature flag exists
    flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == rule_data.flag_id
        )
        .first()
    )

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    # Normalize rule type
    rule_type = rule_data.rule_type.lower().strip()

    # Only user and group targeting are allowed
    if rule_type not in ["user", "group"]:
        raise HTTPException(
            status_code=400,
            detail="rule_type must be either 'user' or 'group'"
        )

    # Normalize rule value
    rule_value = rule_data.rule_value.strip()

    # USER TARGETING VALIDATION
   
    if rule_type == "user":

        try:
            user_id = int(rule_value)
        except ValueError:
            raise HTTPException(
                status_code=400,
                detail="For user targeting, rule_value must be a valid user ID"
            )

        user = (
            db.query(User)
            .filter(
                User.id == user_id
            )
            .first()
        )

        if not user:
            raise HTTPException(
                status_code=404,
                detail="User not found"
            )


    # GROUP TARGETING VALIDATION
   
    if rule_type == "group":

        group = (
            db.query(UserGroup)
            .filter(
                UserGroup.group_name == rule_value
            )
            .first()
        )

        if not group:
            raise HTTPException(
                status_code=404,
                detail="User group not found"
            )

    # DUPLICATE RULE CHECK

    existing_rule = (
        db.query(TargetingRule)
        .filter(
            TargetingRule.flag_id == rule_data.flag_id,
            TargetingRule.rule_type == rule_type,
            TargetingRule.rule_value == rule_value
        )
        .first()
    )

    if existing_rule:
        raise HTTPException(
            status_code=400,
            detail="Targeting rule already exists"
        )

    # CREATE RULE

    rule = TargetingRule(
        flag_id=rule_data.flag_id,
        rule_type=rule_type,
        rule_value=rule_value,
    )

    db.add(rule)
    db.commit()
    db.refresh(rule)

    # REDIS CACHE INVALIDATION

    invalidate_flag_cache(flag.key)

    return rule

# DELETE TARGETING RULE

@router.delete(
    "/{rule_id}"
)
def delete_targeting_rule(
    rule_id: int,
    db: Session = Depends(get_db)
):

    # Find targeting rule
    rule = (
        db.query(TargetingRule)
        .filter(
            TargetingRule.id == rule_id
        )
        .first()
    )

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Targeting rule not found"
        )

    # Find related feature flag
    flag = (
        db.query(FeatureFlag)
        .filter(
            FeatureFlag.id == rule.flag_id
        )
        .first()
    )

    # Delete rule
    db.delete(rule)
    db.commit()

    # REDIS CACHE INVALIDATION

    if flag:
        invalidate_flag_cache(flag.key)

    return {
        "message": "Targeting rule deleted successfully"
    }