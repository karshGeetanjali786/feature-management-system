from datetime import date, datetime, timedelta
from typing import Optional

from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.audit_log import AuditLog
from app.models.feature_flag import FeatureFlag
# from app.security import get_current_user
from app.security import require_admin


router = APIRouter(
    prefix="/audit-logs",
    tags=["Audit Logs"]
)


@router.get("/recent")
def get_recent_audit_logs(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin)
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
    date_from: Optional[date] = Query(None),
    date_to: Optional[date] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(require_admin)
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
        matching_flag_ids = (
            db.query(FeatureFlag.id)
            .filter(
                FeatureFlag.key.ilike(f"%{flag_key}%")
            )
            .subquery()
        )

        query = query.filter(
            (AuditLog.flag_id.in_(matching_flag_ids)) |
            (AuditLog.old_value.ilike(f"%{flag_key}%")) |
            (AuditLog.new_value.ilike(f"%{flag_key}%"))
        )

    # Filter by environment
    if environment:
        query = query.filter(
            AuditLog.environment == environment
        )

    # Filter from date
    if date_from:
        start_datetime = datetime.combine(
            date_from,
            datetime.min.time()
        )

        query = query.filter(
            AuditLog.timestamp >= start_datetime
        )

    # Filter to date
    if date_to:
        # Include the complete end date
        next_day = date_to + timedelta(days=1)

        end_datetime = datetime.combine(
            next_day,
            datetime.min.time()
        )

        query = query.filter(
            AuditLog.timestamp < end_datetime
        )

    logs = (
        query
        .order_by(AuditLog.id.desc())
        .all()
    )

    return logs


@router.get("/{audit_log_id}")
def get_audit_log_detail(
    audit_log_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(require_admin)
):
    audit_log = (
        db.query(AuditLog)
        .filter(AuditLog.id == audit_log_id)
        .first()
    )

    if not audit_log:
        raise HTTPException(
            status_code=404,
            detail="Audit log not found"
        )

    return audit_log