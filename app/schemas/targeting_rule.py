from datetime import datetime

from pydantic import BaseModel, Field


class TargetingRuleCreate(BaseModel):
    flag_id: int = Field(gt=0)
    rule_type: str = Field(min_length=1, max_length=20)
    rule_value: str = Field(min_length=1, max_length=255)


class TargetingRuleResponse(BaseModel):
    id: int
    flag_id: int
    rule_type: str
    rule_value: str
    created_at: datetime | None = None

    class Config:
        from_attributes = True