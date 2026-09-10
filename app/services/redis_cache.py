import json
import os

import redis
from dotenv import load_dotenv

load_dotenv()

REDIS_URL = os.getenv(
    "REDIS_URL",
    "redis://localhost:6379/0"
)

REDIS_TTL = int(
    os.getenv("REDIS_TTL", "300")
)

redis_client = redis.Redis.from_url(
    REDIS_URL,
    decode_responses=True
)


def get_cached_result(cache_key: str):
    cached_data = redis_client.get(cache_key)

    if cached_data is None:
        return None

    return json.loads(cached_data)


def set_cached_result(cache_key: str, result: dict):
    redis_client.setex(
        cache_key,
        REDIS_TTL,
        json.dumps(result)
    )


def delete_cached_result(cache_key: str):
    redis_client.delete(cache_key)

def invalidate_flag_cache(flag_key: str):
    pattern = f"flag:{flag_key}:*"

    keys = redis_client.scan_iter(match=pattern)

    for key in keys:
        redis_client.delete(key)