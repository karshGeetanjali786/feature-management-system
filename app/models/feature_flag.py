from sqlalchemy import Column, Integer, String, Boolean, Text, DateTime
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

    owner_team = Column(String(100), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())