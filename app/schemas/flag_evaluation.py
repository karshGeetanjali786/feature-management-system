from typing import Any, Optional

from pydantic import BaseModel


class FlagEvaluationRequest(BaseModel):
    flag_key: str
    environment: str
    user_id: Optional[str] = None
    groups: list[str] = []


class FlagEvaluationResponse(BaseModel):
    flag_key: str
    enabled: bool
    reason: str

    # Extra information for Evaluation Tester
    rollout_percentage: int = 0
    bucket: Optional[int] = None