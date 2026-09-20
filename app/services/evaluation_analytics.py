from datetime import datetime, timedelta

from app.services.redis_cache import redis_client
from app.models.feature_flag import FeatureFlag


def record_evaluation(flag_key: str, environment: str | None = None):
    """
    Record one feature flag evaluation.

    Stores:
    1. Flag-wise hourly evaluation count
    2. Environment-wise hourly evaluation count
    """

    current_hour = datetime.now().astimezone().strftime("%Y%m%d%H")

    # Flag-wise analytics
    flag_redis_key = (
        f"analytics:evaluations:"
        f"{flag_key}:{current_hour}"
    )

    redis_client.incr(flag_redis_key)
    redis_client.expire(flag_redis_key, 60 * 60 * 24 * 7)

    # Environment-wise analytics
    if environment:
        environment = environment.lower().strip()

        environment_redis_key = (
            f"analytics:usage:"
            f"{environment}:{current_hour}"
        )

        redis_client.incr(environment_redis_key)
        redis_client.expire(
            environment_redis_key,
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
    - Most frequently evaluated flags
    """

    current_time = datetime.now().astimezone()

    # Get all feature flags
    flags = db.query(FeatureFlag).all()

    flag_keys = [flag.key for flag in flags]

    hourly_analytics = []

    # Total evaluations per flag
    flag_totals = {
        flag_key: 0
        for flag_key in flag_keys
    }

    # Hourly evaluations per flag
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

    # MOST FREQUENTLY EVALUATED FLAGS
    most_evaluated_flags = sorted(
        by_flag,
        key=lambda item: item["evaluations"],
        reverse=True
    )

    # TOTAL
    total_evaluations = sum(flag_totals.values())

    return {
        "total_evaluations": total_evaluations,
        "hourly": hourly_analytics,
        "by_flag": by_flag,
        "most_evaluated_flags": most_evaluated_flags
    }


def get_flag_analytics(db):
    """
    Return evaluation count per feature flag.
    """

    analytics = get_evaluation_analytics(db)

    return {
        "total_evaluations": analytics["total_evaluations"],
        "flags": analytics["most_evaluated_flags"]
    }


def get_environment_usage(db):
    """
    Return evaluation usage by environment
    for the last 24 hours.
    """

    current_time = datetime.now().astimezone()

    # Environments expected by the application
    environments = [
        "development",
        "staging",
        "production"
    ]

    usage = []

    for environment in environments:

        total = 0

        for hours_ago in range(23, -1, -1):

            hour_time = current_time - timedelta(hours=hours_ago)

            hour_key = hour_time.strftime("%Y%m%d%H")

            redis_key = (
                f"analytics:usage:"
                f"{environment}:{hour_key}"
            )

            value = redis_client.get(redis_key)

            count = int(value) if value else 0

            total += count

        usage.append({
            "environment": environment,
            "evaluations": total
        })

    total_usage = sum(
        item["evaluations"]
        for item in usage
    )

    return {
        "total_evaluations": total_usage,
        "usage": usage
    }