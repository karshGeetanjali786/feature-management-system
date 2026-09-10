from datetime import datetime

from pydantic import BaseModel, Field


class UserGroupCreate(BaseModel):
    group_name: str = Field(min_length=1, max_length=100)


class UserGroupUpdate(BaseModel):
    group_name: str = Field(min_length=1, max_length=100)


class UserGroupResponse(BaseModel):
    id: int
    group_name: str
    created_at: datetime | None = None

    class Config:
        from_attributes = True