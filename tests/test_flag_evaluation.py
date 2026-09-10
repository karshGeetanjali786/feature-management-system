import hashlib
import pytest
from types import SimpleNamespace
from unittest.mock import MagicMock

from app.services.flag_evaluation import evaluate_flag


def create_basic_db(
    flag,
    environment,
    override=None
):
    db = MagicMock()

    flag_query = MagicMock()
    flag_query.filter.return_value.first.return_value = flag

    environment_query = MagicMock()
    environment_query.filter.return_value.first.return_value = environment

    override_query = MagicMock()
    override_query.filter.return_value.first.return_value = override

    db.query.side_effect = [
        flag_query,
        environment_query,
        override_query
    ]

    return db


def create_targeting_db(
    flag,
    environment,
    user_rule=None,
    group_rules=None,
    override=None
):
    db = MagicMock()

    flag_query = MagicMock()
    flag_query.filter.return_value.first.return_value = flag

    environment_query = MagicMock()
    environment_query.filter.return_value.first.return_value = environment

    override_query = MagicMock()
    override_query.filter.return_value.first.return_value = override

    user_rule_query = MagicMock()
    user_rule_query.filter.return_value.first.return_value = user_rule

    group_rule_query = MagicMock()
    group_rule_query.filter.return_value.all.return_value = (
        group_rules or []
    )

    db.query.side_effect = [
        flag_query,
        environment_query,
        override_query,
        user_rule_query,
        group_rule_query
    ]

    return db


def test_default_value_fallback():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment
    )

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id=None,
        groups=[],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "default_value"


def test_environment_override():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    override = SimpleNamespace(
        id=1,
        flag_id=1,
        environment_id=1,
        value=True
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        override=override
    )

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id=None,
        groups=[],
        db=db
    )

    assert result["enabled"] is True
    assert result["reason"] == "environment_override"


def test_disabled_flag():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=True,
        enabled=False,
        rollout_percentage=100
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = MagicMock()

    flag_query = MagicMock()
    flag_query.filter.return_value.first.return_value = flag

    db.query.side_effect = [flag_query]

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "default_value"


def test_user_targeting_match():
    flag = SimpleNamespace(
        id=2,
        key="new_dashboard",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    user_rule = SimpleNamespace(
        id=1,
        flag_id=2,
        rule_type="user",
        rule_value="user_101"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        user_rule=user_rule
    )

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is True
    assert result["reason"] == "user_targeting"


def test_group_targeting_match():
    flag = SimpleNamespace(
        id=2,
        key="new_dashboard",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    group_rule = SimpleNamespace(
        id=2,
        flag_id=2,
        rule_type="group",
        rule_value="beta_users"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        group_rules=[group_rule]
    )

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id="user_500",
        groups=["beta_users"],
        db=db
    )

    assert result["enabled"] is True
    assert result["reason"] == "group_targeting"


def test_non_targeted_user_uses_default():
    flag = SimpleNamespace(
        id=2,
        key="new_dashboard",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment
    )

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_id="user_999",
        groups=[],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "default_value"


def test_percentage_rollout_100_percent():
    flag = SimpleNamespace(
        id=3,
        key="rollout_test",
        default_value=False,
        enabled=True,
        rollout_percentage=100
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment
    )

    result = evaluate_flag(
        flag_key="rollout_test",
        environment="Development",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is True
    assert result["reason"] == "percentage_rollout"


def test_percentage_rollout_0_percent():
    flag = SimpleNamespace(
        id=3,
        key="rollout_test",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment
    )

    result = evaluate_flag(
        flag_key="rollout_test",
        environment="Development",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "default_value"


def test_percentage_rollout_is_deterministic():
    user_id = "user_101"
    flag_key = "rollout_test"

    hash_value = hashlib.sha256(
        f"{user_id}{flag_key}".encode("utf-8")
    ).hexdigest()

    bucket = int(hash_value, 16) % 100

    flag = SimpleNamespace(
        id=3,
        key=flag_key,
        default_value=False,
        enabled=True,
        rollout_percentage=bucket + 1
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db1 = create_targeting_db(
        flag=flag,
        environment=environment
    )

    db2 = create_targeting_db(
        flag=flag,
        environment=environment
    )

    result1 = evaluate_flag(
        flag_key=flag_key,
        environment="Development",
        user_id=user_id,
        groups=[],
        db=db1
    )

    result2 = evaluate_flag(
        flag_key=flag_key,
        environment="Development",
        user_id=user_id,
        groups=[],
        db=db2
    )

    assert result1["enabled"] is True
    assert result2["enabled"] is True
    assert result1["reason"] == "percentage_rollout"
    assert result2["reason"] == "percentage_rollout"


def test_environment_override_has_priority():
    flag = SimpleNamespace(
        id=4,
        key="override_test",
        default_value=False,
        enabled=True,
        rollout_percentage=100
    )

    environment = SimpleNamespace(
        id=1,
        name="Production"
    )

    override = SimpleNamespace(
        id=1,
        flag_id=4,
        environment_id=1,
        value=False
    )

    user_rule = SimpleNamespace(
        id=5,
        flag_id=4,
        rule_type="user",
        rule_value="user_101"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        user_rule=user_rule,
        override=override
    )

    result = evaluate_flag(
        flag_key="override_test",
        environment="Production",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "environment_override"


def test_group_not_targeted_uses_default():
    flag = SimpleNamespace(
        id=5,
        key="group_test",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Production"
    )

    group_rule = SimpleNamespace(
        id=8,
        flag_id=5,
        rule_type="group",
        rule_value="beta_users"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        group_rules=[group_rule]
    )

    result = evaluate_flag(
        flag_key="group_test",
        environment="Production",
        user_id="user_500",
        groups=["internal_team"],
        db=db
    )

    assert result["enabled"] is False
    assert result["reason"] == "default_value"


def test_user_targeting_has_priority_over_percentage():
    flag = SimpleNamespace(
        id=6,
        key="priority_test",
        default_value=False,
        enabled=True,
        rollout_percentage=0
    )

    environment = SimpleNamespace(
        id=1,
        name="Production"
    )

    user_rule = SimpleNamespace(
        id=10,
        flag_id=6,
        rule_type="user",
        rule_value="user_101"
    )

    db = create_targeting_db(
        flag=flag,
        environment=environment,
        user_rule=user_rule
    )

    result = evaluate_flag(
        flag_key="priority_test",
        environment="Production",
        user_id="user_101",
        groups=[],
        db=db
    )

    assert result["enabled"] is True
    assert result["reason"] == "user_targeting"