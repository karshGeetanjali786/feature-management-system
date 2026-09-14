from datetime import datetime, timedelta

from app.services.redis_cache import redis_client
from app.models.feature_flag import FeatureFlag


def record_evaluation(flag_key: str):
    current_hour = datetime.now().astimezone().strftime("%Y%m%d%H")

    redis_key = f"analytics:evaluations:{flag_key}:{current_hour}"

    redis_client.incr(redis_key)

    redis_client.expire(
        redis_key,
        60 * 60 * 24 * 7
    )


def get_evaluation_analytics(db):
    """
    Return evaluation analytics for the last 24 hours.

    Includes:
    - Total evaluations
    - Overall hourly evaluations
    - Per-feature-flag evaluation counts
    - Per-feature-flag hourly evaluation counts
    """

    current_time = datetime.now().astimezone()

    # Get all feature flags from database
    flags = db.query(FeatureFlag).all()

    flag_keys = [flag.key for flag in flags]

    hourly_analytics = []

    # Store total evaluations per flag
    flag_totals = {
        flag_key: 0
        for flag_key in flag_keys
    }

    # Store hourly evaluations per flag
    flag_hourly = {
        flag_key: []
        for flag_key in flag_keys
    }

    
    # LAST 24 HOURS

    for hours_ago in range(23, -1, -1):

        hour_time = current_time - timedelta(hours=hours_ago)

        hour_key = hour_time.strftime("%Y%m%d%H")

        total = 0

        hourly_flag_counts = {}

        for flag_key in flag_keys:

            redis_key = (
                f"analytics:evaluations:"
                f"{flag_key}:{hour_key}"
            )

            value = redis_client.get(redis_key)

            count = int(value) if value else 0

            total += count

            flag_totals[flag_key] += count

            hourly_flag_counts[flag_key] = count

            flag_hourly[flag_key].append({
                "hour": hour_time.strftime("%H:%M"),
                "date": hour_time.strftime("%Y-%m-%d"),
                "evaluations": count
            })

        hourly_analytics.append({
            "hour": hour_time.strftime("%H:%M"),
            "date": hour_time.strftime("%Y-%m-%d"),
            "evaluations": total,
            "flags": hourly_flag_counts
        })

    
    # PER-FLAG SUMMARY

    by_flag = []

    for flag_key in flag_keys:

        by_flag.append({
            "flag_key": flag_key,
            "evaluations": flag_totals[flag_key],
            "hourly": flag_hourly[flag_key]
        })

    
    # TOTAL
    
    total_evaluations = sum(flag_totals.values())

    return {
        "total_evaluations": total_evaluations,
        "hourly": hourly_analytics,
        "by_flag": by_flag
    }