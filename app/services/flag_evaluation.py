import hashlib

from typing import Optional

from sqlalchemy.orm import Session

from app.models.environment import Environment
from app.models.environment_override import EnvironmentOverride
from app.models.feature_flag import FeatureFlag
from app.models.targeting_rule import TargetingRule


def calculate_rollout_bucket(user_id: str, flag_key: str) -> int:
    """
    Generate a deterministic bucket from 0 to 99
    using user_id + flag_key.
    """

    rollout_key = f"{user_id}{flag_key}"

    hash_value = hashlib.sha256(
        rollout_key.encode("utf-8")
    ).hexdigest()

    return int(hash_value, 16) % 100


def evaluate_flag(
    flag_key: str,
    environment: str,
    user_id: Optional[str] = None,
    groups: Optional[list[str]] = None,
    db: Session = None
) -> dict:
    """
    Enhanced feature flag evaluation.

    Evaluation flow:
    1. Find Flag
    2. Check Enabled
    3. Check Environment Override
    4. Check User Targeting
    5. Check Group Targeting
    6. Check Percentage Rollout
    7. Return Default Value
    """

    if db is None:
        raise ValueError("Database session is required")

    groups = groups or []

    # 1. FIND FLAG

    flag = db.query(FeatureFlag).filter(
        FeatureFlag.key == flag_key
    ).first()

    if not flag:
        raise ValueError("Feature flag not found")


    # 2. CHECK ENABLED

    if not flag.enabled:
        return {
            "enabled": False,
            "reason": "default_value"
        }

    
    # 3. FIND ENVIRONMENT

    env = db.query(Environment).filter(
        Environment.name.ilike(environment)
    ).first()

    if not env:
        raise ValueError("Environment not found")

   
    # 4. ENVIRONMENT OVERRIDE

    override = db.query(EnvironmentOverride).filter(
        EnvironmentOverride.flag_id == flag.id,
        EnvironmentOverride.environment_id == env.id
    ).first()

    if override:
        return {
            "enabled": bool(override.value),
            "reason": "environment_override"
        }

    
    # 5. USER TARGETING
   
    if user_id is not None:

        user_rule = db.query(TargetingRule).filter(
            TargetingRule.flag_id == flag.id,
            TargetingRule.rule_type == "user",
            TargetingRule.rule_value == str(user_id)
        ).first()

        if user_rule:
            return {
                "enabled": True,
                "reason": "user_targeting"
            }

   
    # 6. GROUP TARGETING

    if groups:

        group_rules = db.query(TargetingRule).filter(
            TargetingRule.flag_id == flag.id,
            TargetingRule.rule_type == "group"
        ).all()

        target_groups = {
            rule.rule_value
            for rule in group_rules
        }

        for group in groups:
            if group in target_groups:
                return {
                    "enabled": True,
                    "reason": "group_targeting"
                }


    # 7. PERCENTAGE ROLLOUT

    rollout_percentage = flag.rollout_percentage or 0

    if rollout_percentage > 0 and user_id is not None:

        bucket = calculate_rollout_bucket(
            str(user_id),
            flag.key
        )

        if bucket < rollout_percentage:
            return {
                "enabled": True,
                "reason": "percentage_rollout"
            }

   
    # 8. DEFAULT VALUE
    
    return {
        "enabled": bool(flag.default_value),
        "reason": "default_value"
    }