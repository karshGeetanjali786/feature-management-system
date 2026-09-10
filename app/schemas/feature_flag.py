from pydantic import BaseModel, Field
from typing import Optional, Any


class FeatureFlagCreate(BaseModel):
    key: str
    description: Optional[str] = None
    type: str
    default_value: Optional[Any] = None
    enabled: bool = True

    rollout_percentage: int = Field(
        default=0,
        ge=0,
        le=100
    )

    owner_team: Optional[str] = None


class FeatureFlagUpdate(BaseModel):
    description: Optional[str] = None
    type: Optional[str] = None
    default_value: Optional[Any] = None
    enabled: Optional[bool] = None

    rollout_percentage: Optional[int] = Field(
        default=None,
        ge=0,
        le=100
    )

    owner_team: Optional[str] = None


class FeatureFlagResponse(BaseModel):
    id: int
    key: str
    description: Optional[str] = None
    type: str
    default_value: Optional[Any] = None
    enabled: bool

    rollout_percentage: int

    owner_team: Optional[str] = None

    class Config:
        from_attributes = True