from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey
from sqlalchemy.sql import func

from app.database.connection import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)

    action = Column(
        String(100),
        nullable=False
    )

    performed_by = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=True
    )

    flag_id = Column(
        Integer,
        ForeignKey(
            "feature_flags.id",
            ondelete="SET NULL"
        ),
        nullable=True
    )

    environment_id = Column(
        Integer,
        ForeignKey(
            "environments.id",
            ondelete="SET NULL"
        ),
        nullable=True
    )

    environment = Column(
        String(50),
        nullable=True
    )

    new_value = Column(
        Text,
        nullable=True
    )

    old_value = Column(
        Text,
        nullable=True
    )

    timestamp = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )