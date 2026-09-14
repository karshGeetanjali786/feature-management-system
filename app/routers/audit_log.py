from typing import Optional

from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.audit_log import AuditLog
from app.security import get_current_user


router = APIRouter(
    prefix="/audit-logs",
    tags=["Audit Logs"]
)

@router.get("/recent")
def get_recent_audit_logs(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    logs = (
        db.query(AuditLog)
        .order_by(AuditLog.id.desc())
        .limit(5)
        .all()
    )

    return logs

@router.get("/")
def get_audit_logs(
    action: Optional[str] = Query(None),
    performed_by: Optional[int] = Query(None),
    flag_key: Optional[str] = Query(None),
    environment: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    query = db.query(AuditLog)

    # Filter by action
    if action:
        query = query.filter(
            AuditLog.action == action
        )

    # Filter by user / actor
    if performed_by:
        query = query.filter(
            AuditLog.performed_by == performed_by
        )

    # Filter by flag key
    if flag_key:
        query = query.filter(
            (AuditLog.old_value.ilike(f"%{flag_key}%")) |
            (AuditLog.new_value.ilike(f"%{flag_key}%"))
        )

    # Filter by environment
    if environment:
        query = query.filter(
            AuditLog.environment == environment
        )

    logs = (
        query
        .order_by(AuditLog.id.desc())
        .all()
    )

    return logs