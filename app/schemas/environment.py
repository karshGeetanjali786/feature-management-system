from pydantic import BaseModel
from typing import Optional


class EnvironmentCreate(BaseModel):
    name: str
    description: Optional[str] = None


class EnvironmentUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None


class EnvironmentResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None

    class Config:
        from_attributes = True