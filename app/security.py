from pwdlib import PasswordHash
from jose import jwt

# Password hashing
password_hash = PasswordHash.recommended()

# JWT settings
SECRET_KEY = "feature-management-secret-key"
ALGORITHM = "HS256"


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, hashed_password: str) -> bool:
    return password_hash.verify(password, hashed_password)


def create_access_token(data: dict) -> str:
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)