from typing import Any, Optional

from sqlalchemy.orm import Session

from app.models.environment import Environment
from app.models.environment_override import EnvironmentOverride
from app.models.feature_flag import FeatureFlag


def evaluate_flag(
    flag_key: str,
    environment: str,
    user_context: Optional[dict[str, Any]] = None,
    db: Session = None
) -> Any:
    """
    Evaluate a feature flag for a specific environment.

    Evaluation flow:
    1. Find the feature flag.
    2. Find the requested environment.
    3. Check for an environment-specific override.
    4. If override exists, use its value.
    5. Otherwise, use the flag's default value.
    6. If the flag is disabled, return False.
    """

    if db is None:
        raise ValueError("Database session is required")

    # 1. Find feature flag
    flag = db.query(FeatureFlag).filter(
        FeatureFlag.key == flag_key
    ).first()

    if not flag:
        raise ValueError("Feature flag not found")

    # 2. Find environment
    env = db.query(Environment).filter(
        Environment.name.ilike(environment)
    ).first()

    if not env:
        raise ValueError("Environment not found")

    # 3. Check environment override
    override = db.query(EnvironmentOverride).filter(
        EnvironmentOverride.flag_id == flag.id,
        EnvironmentOverride.environment_id == env.id
    ).first()

    # 4. Use override if available
    if override:
        final_value = override.value
    else:
        # 5. Otherwise use default value
        final_value = flag.default_value

    # 6. Global enabled check
    if not flag.enabled:
        return False

    return final_value