from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.schemas.flag_evaluation import (
    FlagEvaluationRequest,
    FlagEvaluationResponse
)
from app.services.flag_evaluation import evaluate_flag


router = APIRouter(
    prefix="/flags",
    tags=["Flag Evaluation"]
)


@router.post(
    "/evaluate",
    response_model=FlagEvaluationResponse
)
def evaluate_feature_flag(
    request: FlagEvaluationRequest,
    db: Session = Depends(get_db)
):
    try:
        value = evaluate_flag(
            flag_key=request.flag_key,
            environment=request.environment,
            db=db
        )

        return {
            "flag_key": request.flag_key,
            "value": value
        }

    except ValueError as e:
        error_message = str(e)

        if error_message == "Feature flag not found":
            raise HTTPException(
                status_code=404,
                detail=error_message
            )

        if error_message == "Environment not found":
            raise HTTPException(
                status_code=400,
                detail=error_message
            )

        raise HTTPException(
            status_code=400,
            detail=error_message
        )