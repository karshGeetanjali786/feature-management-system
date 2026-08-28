from typing import Any

from pydantic import BaseModel


class FlagEvaluationRequest(BaseModel):
    flag_key: str
    environment: str


class FlagEvaluationResponse(BaseModel):
    flag_key: str
    value: Any