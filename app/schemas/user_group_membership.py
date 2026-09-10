from datetime import datetime

from pydantic import BaseModel


class UserGroupMembershipResponse(BaseModel):
    id: int
    user_id: int
    group_id: int
    created_at: datetime | None = None

    class Config:
        from_attributes = True