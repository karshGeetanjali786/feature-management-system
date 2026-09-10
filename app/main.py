from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.database.connection import engine
from app.routers.auth import router as auth_router
from app.routers.environment import router as environment_router
from app.routers.feature_flag import router as feature_flag_router
from app.routers.environment_override import router as environment_override_router
from app.routers.flag_evaluation import router as flag_evaluation_router
from app.routers.group import router as group_router
from app.routers.user_group_membership import router as user_group_membership_router
from app.routers.targeting_rule import router as targeting_rule_router

app = FastAPI(
    title="Feature Management System",
    description="Feature Management System API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(environment_router)
app.include_router(feature_flag_router)
app.include_router(environment_override_router)
app.include_router(flag_evaluation_router)
app.include_router(group_router)
app.include_router(user_group_membership_router)
app.include_router(targeting_rule_router)

@app.get("/")
def root():
    return {
        "message": "Feature Management System API is running"
    }

@app.get("/home")
def home():
    return {
        "message": "Welcome to Feature Management System"
    }


@app.get("/health")
def health_check():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "connected"
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "connection failed",
            "error": str(e)
        }