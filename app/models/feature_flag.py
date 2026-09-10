from sqlalchemy import Column, Integer, String, Boolean, Text, DateTime, CheckConstraint
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.sql import func

from app.database.connection import Base


class FeatureFlag(Base):
    __tablename__ = "feature_flags"

    id = Column(Integer, primary_key=True, index=True)

    key = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text, nullable=True)

    type = Column(String(20), nullable=False)

    default_value = Column(JSONB, nullable=True)

    enabled = Column(Boolean, default=True, nullable=False)

    # Percentage rollout: 0 to 100
    rollout_percentage = Column(
        Integer,
        nullable=False,
        default=0,
        server_default="0"
    )

    owner_team = Column(String(100), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        CheckConstraint(
            "rollout_percentage >= 0 AND rollout_percentage <= 100",
            name="check_rollout_percentage"
        ),
    )