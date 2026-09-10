from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.feature_flag import FeatureFlag
from app.schemas.flag_evaluation import (
    FlagEvaluationRequest,
    FlagEvaluationResponse
)
from app.services.flag_evaluation import (
    evaluate_flag,
    calculate_rollout_bucket
)
from app.services.redis_cache import (
    get_cached_result,
    set_cached_result
)


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
        # Create a unique cache key
        groups = sorted(request.groups or [])

        user_id = (
            str(request.user_id)
            if request.user_id is not None
            else "anonymous"
        )

        groups_key = ",".join(groups) if groups else "none"

        cache_key = (
            f"flag:{request.flag_key}:"
            f"{user_id}:"
            f"{request.environment}:"
            f"{groups_key}"
        )

       
        # 1. CHECK REDIS CACHE
       
        cached_result = get_cached_result(cache_key)

        if cached_result is not None:
            print(f"Redis Cache HIT: {cache_key}")
            return cached_result

        print(f"Redis Cache MISS: {cache_key}")

        # 2. EVALUATE FLAG
       
        result = evaluate_flag(
            flag_key=request.flag_key,
            environment=request.environment,
            user_id=request.user_id,
            groups=request.groups,
            db=db
        )

        # Get flag information
        flag = db.query(FeatureFlag).filter(
            FeatureFlag.key == request.flag_key
        ).first()

        if not flag:
            raise HTTPException(
                status_code=404,
                detail="Feature flag not found"
            )

        rollout_percentage = flag.rollout_percentage or 0

        bucket = None

        if request.user_id is not None and rollout_percentage > 0:
            bucket = calculate_rollout_bucket(
                str(request.user_id),
                flag.key
            )

        response = {
            "flag_key": request.flag_key,
            "enabled": result["enabled"],
            "reason": result["reason"],
            "rollout_percentage": rollout_percentage,
            "bucket": bucket
        }

        # 3. SAVE RESULT IN REDIS

        set_cached_result(
            cache_key,
            response
        )

        return response

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