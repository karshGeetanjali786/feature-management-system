from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.environment import Environment
from app.schemas.environment import (
    EnvironmentCreate,
    EnvironmentUpdate,
    EnvironmentResponse
)


router = APIRouter(
    prefix="/environments",
    tags=["Environments"]
)


@router.post("/", response_model=EnvironmentResponse)
def create_environment(
    environment: EnvironmentCreate,
    db: Session = Depends(get_db)
):
    existing_environment = db.query(Environment).filter(
        Environment.name == environment.name
    ).first()

    if existing_environment:
        raise HTTPException(
            status_code=400,
            detail="Environment already exists"
        )

    new_environment = Environment(
        name=environment.name,
        description=environment.description
    )

    db.add(new_environment)
    db.commit()
    db.refresh(new_environment)

    return new_environment


@router.get("/", response_model=list[EnvironmentResponse])
def list_environments(db: Session = Depends(get_db)):
    return db.query(Environment).all()


@router.get("/{environment_id}", response_model=EnvironmentResponse)
def get_environment(
    environment_id: int,
    db: Session = Depends(get_db)
):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    return environment


@router.put("/{environment_id}", response_model=EnvironmentResponse)
def update_environment(
    environment_id: int,
    environment_data: EnvironmentUpdate,
    db: Session = Depends(get_db)
):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    if environment_data.name is not None:
        environment.name = environment_data.name

    if environment_data.description is not None:
        environment.description = environment_data.description

    db.commit()
    db.refresh(environment)

    return environment


@router.delete("/{environment_id}")
def delete_environment(
    environment_id: int,
    db: Session = Depends(get_db)
):
    environment = db.query(Environment).filter(
        Environment.id == environment_id
    ).first()

    if not environment:
        raise HTTPException(
            status_code=404,
            detail="Environment not found"
        )

    db.delete(environment)
    db.commit()

    return {
        "message": "Environment deleted successfully"
    }