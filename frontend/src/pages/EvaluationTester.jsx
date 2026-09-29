import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function EvaluationTester() {
  const { t } = useTranslation();

  const email = localStorage.getItem("user_email") || "User";

  const [flags, setFlags] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const [flagKey, setFlagKey] = useState("");
  const [environment, setEnvironment] = useState("");
  const [userId, setUserId] = useState("");
  const [groups, setGroups] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");

    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setError("");

        const token = localStorage.getItem("access_token");

        if (!token) {
          setError(t("notAuthenticated"));
          return;
        }

        const authHeaders = {
          Authorization: `Bearer ${token}`,
        };

        const [flagsResponse, environmentsResponse] =
          await Promise.all([
            fetch(`${API_BASE}/feature-flags/`, {
              headers: authHeaders,
            }),
            fetch(`${API_BASE}/environments/`, {
              headers: authHeaders,
            }),
          ]);

        if (
          flagsResponse.status === 401 ||
          environmentsResponse.status === 401
        ) {
          setError(t("sessionExpired"));
          localStorage.removeItem("access_token");
          return;
        }

        if (flagsResponse.ok) {
          const flagsData = await flagsResponse.json();

          setFlags(flagsData);

          if (flagsData.length > 0) {
            setFlagKey(flagsData[0].key);
          }
        }

        if (environmentsResponse.ok) {
          const environmentsData =
            await environmentsResponse.json();

          setEnvironments(environmentsData);

          if (environmentsData.length > 0) {
            setEnvironment(environmentsData[0].name);
          }
        }
      } catch (err) {
        setError(t("couldNotLoadFlagsEnvironments"));
      }
    };

    loadData();
  }, [t]);

  const evaluateFlag = async (e) => {
    e.preventDefault();

    if (!flagKey || !environment || !userId) {
      setError(t("selectFlagEnvironmentUser"));
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const token = localStorage.getItem("access_token");

      if (!token) {
        setError(t("notAuthenticated"));
        return;
      }

      const groupList = groups
        .split(",")
        .map((group) => group.trim())
        .filter((group) => group.length > 0);

      const response = await fetch(
        `${API_BASE}/flags/evaluate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify({
            flag_key: flagKey,
            environment: environment,
            user_id: userId,
            groups: groupList,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        setError(t("sessionExpired"));
        localStorage.removeItem("access_token");
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotEvaluateFlag")
        );
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">
              {t("flagEvaluation")}
            </p>

            <h1>{t("evaluationTester")}</h1>

            <p>
              {t("evaluationTesterDescription")}
            </p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
            <strong>{email}</strong>
          </div>
        </header>

        <section className="evaluation-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {t("testConfiguration")}
              </p>

              <h2>{t("evaluateFeatureFlag")}</h2>
            </div>
          </div>

          <form
            className="evaluation-form"
            onSubmit={evaluateFlag}
          >
            <div className="evaluation-field">
              <label>{t("featureFlag")}</label>

              <select
                value={flagKey}
                onChange={(e) =>
                  setFlagKey(e.target.value)
                }
              >
                <option value="">
                  {t("selectFeatureFlag")}
                </option>

                {flags.map((flag) => (
                  <option
                    key={flag.id}
                    value={flag.key}
                  >
                    {flag.key}
                  </option>
                ))}
              </select>
            </div>

            <div className="evaluation-field">
              <label>{t("environment")}</label>

              <select
                value={environment}
                onChange={(e) =>
                  setEnvironment(e.target.value)
                }
              >
                <option value="">
                  {t("selectEnvironment")}
                </option>

                {environments.map((env) => (
                  <option
                    key={env.id}
                    value={env.name}
                  >
                    {env.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="evaluation-field">
              <label>{t("userId")}</label>

              <input
                type="text"
                placeholder={t("userIdExample")}
                value={userId}
                onChange={(e) =>
                  setUserId(e.target.value)
                }
              />
            </div>

            <div className="evaluation-field">
              <label>{t("groups")}</label>

              <input
                type="text"
                placeholder={t("groupsExample")}
                value={groups}
                onChange={(e) =>
                  setGroups(e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="primary-button evaluation-button"
              disabled={loading}
            >
              {loading
                ? t("evaluating")
                : t("evaluateFlag")}
            </button>
          </form>

          {error && (
            <div className="status-message error-message">
              {error}
            </div>
          )}
        </section>

        {result && (
          <section className="evaluation-result-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {t("evaluationResult")}
                </p>

                <h2>{t("decisionDetails")}</h2>
              </div>
            </div>

            <div className="result-grid">
              <div className="result-card">
                <span>{t("featureFlag")}</span>

                <strong>
                  {result.flag_key}
                </strong>
              </div>

              <div className="result-card">
                <span>{t("rollout")}</span>

                <strong>
                  {result.rollout_percentage}%
                </strong>
              </div>

              <div className="result-card">
                <span>{t("bucket")}</span>

                <strong>
                  {result.bucket !== null &&
                  result.bucket !== undefined
                    ? `${result.bucket} / 99`
                    : "N/A"}
                </strong>
              </div>

              <div className="result-card">
                <span>{t("reason")}</span>

                <strong className="reason-text">
                  {result.reason}
                </strong>
              </div>

              <div
                className={
                  result.enabled
                    ? "result-card result-enabled"
                    : "result-card result-disabled"
                }
              >
                <span>{t("finalResult")}</span>

                <strong>
                  {result.enabled
                    ? `✓ ${t("enabled")}`
                    : `✕ ${t("disabled")}`}
                </strong>
              </div>
            </div>

            <div className="evaluation-explanation">
              <p className="eyebrow">
                {t("howItWasDecided")}
              </p>

              <p>
                {t("userEvaluatedFor")}{" "}
                <strong>{userId}</strong>{" "}
                {t("wasEvaluatedFor")}{" "}
                <strong>{result.flag_key}</strong>.
              </p>

              <p>
                {t("evaluationReason")}{" "}
                <strong>{result.reason}</strong>.
              </p>

              {result.bucket !== null &&
              result.bucket !== undefined ? (
                <p>
                  {t("deterministicBucket")}{" "}
                  <strong>
                    {result.bucket}
                  </strong>{" "}
                  {t("andRollout")}{" "}
                  <strong>
                    {result.rollout_percentage}%
                  </strong>
                  .
                </p>
              ) : (
                <p>
                  {t("noRolloutBucket")}
                </p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default EvaluationTester;