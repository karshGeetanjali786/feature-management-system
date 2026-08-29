import pytest
from types import SimpleNamespace
from unittest.mock import MagicMock

import pytest

# from app.models.environment import Environment
# from app.models.environment_override import EnvironmentOverride
# from app.models.feature_flag import FeatureFlag
from app.services.flag_evaluation import evaluate_flag


def create_mock_db(flag, environment, override=None):
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


def test_default_value_fallback():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=False,
        enabled=True
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_mock_db(flag, environment)

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_context={},
        db=db
    )

    assert result is False


def test_environment_override():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=False,
        enabled=True
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

    db = create_mock_db(flag, environment, override)

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_context={},
        db=db
    )

    assert result is True


def test_disabled_flag():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=True,
        enabled=False
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

    db = create_mock_db(flag, environment, override)

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_context={},
        db=db
    )

    assert result is False


def test_empty_user_context():
    flag = SimpleNamespace(
        id=1,
        key="new_dashboard",
        default_value=True,
        enabled=True
    )

    environment = SimpleNamespace(
        id=1,
        name="Development"
    )

    db = create_mock_db(flag, environment)

    result = evaluate_flag(
        flag_key="new_dashboard",
        environment="Development",
        user_context={},
        db=db
    )

    assert result is True

def test_flag_not_found():
    db = MagicMock()

    flag_query = MagicMock()
    flag_query.filter.return_value.first.return_value = None

    db.query.side_effect = [flag_query]

    with pytest.raises(ValueError, match="Feature flag not found"):
        evaluate_flag(
            flag_key="does_not_exist",
            environment="Development",
            user_context={},
            db=db
        )

   