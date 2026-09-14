from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.security import get_current_user
from app.database.connection import get_db

from app.services.evaluation_analytics import get_evaluation_analytics


router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/evaluations")
def get_evaluation_analytics_api(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return get_evaluation_analytics(db)

