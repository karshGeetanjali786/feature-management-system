import json

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.feature_flag import FeatureFlag
from app.models.targeting_rule import TargetingRule
from app.models.user import User
from app.models.user_group import UserGroup
from app.schemas.targeting_rule import TargetingRuleCreate, TargetingRuleResponse
from app.services.redis_cache import invalidate_flag_cache
# from app.security import get_current_user
from app.security import require_admin
from app.models.audit_log import AuditLog


router = APIRouter(
    prefix="/targeting-rules",
    tags=["Targeting Rules"]
)


@router.get("/", response_model=list[TargetingRuleResponse])
def get_targeting_rules(
    db: Session = Depends(get_db)
):
    return db.query(TargetingRule).order_by(TargetingRule.id).all()


@router.post("/", response_model=TargetingRuleResponse, status_code=201)
def create_targeting_rule(
    rule_data: TargetingRuleCreate,
    db: Session = Depends(get_db),
    current_user=Depends(require_admin)
):
    flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == rule_data.flag_id
    ).first()

    if not flag:
        raise HTTPException(
            status_code=404,
            detail="Feature flag not found"
        )

    rule_type = rule_data.rule_type.lower().strip()

    if rule_type not in ["user", "group"]:
        raise HTTPException(
            status_code=400,
            detail="rule_type must be either 'user' or 'group'"
        )

    rule_value = rule_data.rule_value.strip()

    # Validate user targeting
    if rule_type == "user":
        try:
            user_id = int(rule_value)
        except ValueError:
            raise HTTPException(
                status_code=400,
                detail="For user targeting, rule_value must be a valid user ID"
            )

        user = db.query(User).filter(
            User.id == user_id
        ).first()

        if not user:
            raise HTTPException(
                status_code=404,
                detail="User not found"
            )

    # Validate group targeting
    if rule_type == "group":
        group = db.query(UserGroup).filter(
            UserGroup.group_name == rule_value
        ).first()

        if not group:
            raise HTTPException(
                status_code=404,
                detail="User group not found"
            )

    # Prevent duplicate targeting rule
    existing_rule = db.query(TargetingRule).filter(
        TargetingRule.flag_id == rule_data.flag_id,
        TargetingRule.rule_type == rule_type,
        TargetingRule.rule_value == rule_value
    ).first()

    if existing_rule:
        raise HTTPException(
            status_code=400,
            detail="Targeting rule already exists"
        )

    # Create targeting rule
    rule = TargetingRule(
        flag_id=rule_data.flag_id,
        rule_type=rule_type,
        rule_value=rule_value,
    )

    db.add(rule)
    db.commit()
    db.refresh(rule)

    # Decide audit action
    if rule_type == "user":
        audit_action = "USER_TARGET_ADDED"
    else:
        audit_action = "GROUP_TARGET_ADDED"

    # Create audit log
    audit_log = AuditLog(
        action=audit_action,
        performed_by=current_user.id,
        flag_id=rule.flag_id,
        environment_id=None,
        environment=None,
        old_value=None,
        new_value=json.dumps({
            "id": rule.id,
            "flag_id": rule.flag_id,
            "rule_type": rule.rule_type,
            "rule_value": rule.rule_value
        })
    )

    db.add(audit_log)
    db.commit()

    # Clear Redis cache
    invalidate_flag_cache(flag.key)

    return rule


@router.delete("/{rule_id}")
def delete_targeting_rule(
    rule_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_admin)
):
    rule = db.query(TargetingRule).filter(
        TargetingRule.id == rule_id
    ).first()

    if not rule:
        raise HTTPException(
            status_code=404,
            detail="Targeting rule not found"
        )

    flag = db.query(FeatureFlag).filter(
        FeatureFlag.id == rule.flag_id
    ).first()

    old_value = {
        "id": rule.id,
        "flag_id": rule.flag_id,
        "rule_type": rule.rule_type,
        "rule_value": rule.rule_value
    }

    # Decide audit action
    if rule.rule_type == "user":
        audit_action = "USER_TARGET_REMOVED"
    else:
        audit_action = "GROUP_TARGET_REMOVED"

    # Create audit log before deleting rule
    audit_log = AuditLog(
        action=audit_action,
        performed_by=current_user.id,
        flag_id=rule.flag_id,
        environment_id=None,
        environment=None,
        old_value=json.dumps(old_value),
        new_value=None
    )

    db.add(audit_log)

    # Delete targeting rule
    db.delete(rule)
    db.commit()

    # Clear Redis cache
    if flag:
        invalidate_flag_cache(flag.key)

    return {
        "message": "Targeting rule deleted successfully"
    }