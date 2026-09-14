import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function EvaluationTester() {

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

  useEffect(() => {
    const loadData = async () => {
      try {
        setError("");

        const [flagsResponse, environmentsResponse] =
          await Promise.all([
            fetch(`${API_BASE}/feature-flags/`),
            fetch(`${API_BASE}/environments/`),
          ]);

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
        setError(
          "Could not load feature flags or environments."
        );
      }
    };

    loadData();
  }, []);

  const evaluateFlag = async (e) => {
    e.preventDefault();

    if (!flagKey || !environment || !userId) {
      setError(
        "Please select a flag, environment and enter User ID."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      // Convert comma-separated groups into an array
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

      if (!response.ok) {
        throw new Error(
          data.detail || "Could not evaluate feature flag."
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

      {/* MAIN CONTENT */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">
          <div>
            <p className="eyebrow">FLAG EVALUATION</p>

            <h1>Evaluation Tester</h1>

            <p>
              Test how a feature flag behaves for a specific
              user and targeting context.
            </p>
          </div>

          <div className="user-box">
            <span>Signed in as</span>
            <strong>{email}</strong>
          </div>
        </header>

        {/* TEST CONFIGURATION */}

        <section className="evaluation-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TEST CONFIGURATION</p>
              <h2>Evaluate Feature Flag</h2>
            </div>
          </div>

          <form
            className="evaluation-form"
            onSubmit={evaluateFlag}
          >
            {/* FEATURE FLAG */}

            <div className="evaluation-field">
              <label>Feature Flag</label>

              <select
                value={flagKey}
                onChange={(e) => setFlagKey(e.target.value)}
              >
                <option value="">
                  Select feature flag
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

            {/* ENVIRONMENT */}

            <div className="evaluation-field">
              <label>Environment</label>

              <select
                value={environment}
                onChange={(e) =>
                  setEnvironment(e.target.value)
                }
              >
                <option value="">
                  Select environment
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

            {/* USER ID */}

            <div className="evaluation-field">
              <label>User ID</label>

              <input
                type="text"
                placeholder="Example: user_101"
                value={userId}
                onChange={(e) =>
                  setUserId(e.target.value)
                }
              />
            </div>

            {/* GROUPS */}

            <div className="evaluation-field">
              <label>Groups</label>

              <input
                type="text"
                placeholder="Example: beta_users, internal_team"
                value={groups}
                onChange={(e) =>
                  setGroups(e.target.value)
                }
              />
            </div>

            {/* EVALUATE BUTTON */}

            <button
              type="submit"
              className="primary-button evaluation-button"
              disabled={loading}
            >
              {loading
                ? "Evaluating..."
                : "Evaluate Flag"}
            </button>
          </form>

          {error && (
            <div className="status-message error-message">
              {error}
            </div>
          )}
        </section>

        {/* RESULT */}

        {result && (
          <section className="evaluation-result-section">

            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  EVALUATION RESULT
                </p>

                <h2>Decision Details</h2>
              </div>
            </div>

            <div className="result-grid">

              {/* FEATURE FLAG */}

              <div className="result-card">
                <span>Feature Flag</span>

                <strong>
                  {result.flag_key}
                </strong>
              </div>

              {/* ROLLOUT */}

              <div className="result-card">
                <span>Rollout</span>

                <strong>
                  {result.rollout_percentage}%
                </strong>
              </div>

              {/* BUCKET */}

              <div className="result-card">
                <span>Bucket</span>

                <strong>
                  {result.bucket !== null &&
                  result.bucket !== undefined
                    ? `${result.bucket} / 99`
                    : "N/A"}
                </strong>
              </div>

              {/* REASON */}

              <div className="result-card">
                <span>Reason</span>

                <strong className="reason-text">
                  {result.reason}
                </strong>
              </div>

              {/* FINAL RESULT */}

              <div
                className={
                  result.enabled
                    ? "result-card result-enabled"
                    : "result-card result-disabled"
                }
              >
                <span>Final Result</span>

                <strong>
                  {result.enabled
                    ? "✓ Enabled"
                    : "✕ Disabled"}
                </strong>
              </div>
            </div>

            {/* EXPLANATION */}

            <div className="evaluation-explanation">
              <p className="eyebrow">
                HOW IT WAS DECIDED
              </p>

              <p>
                User{" "}
                <strong>{userId}</strong>{" "}
                was evaluated for{" "}
                <strong>{result.flag_key}</strong>.
              </p>

              <p>
                Evaluation reason:
                <strong> {result.reason}</strong>.
              </p>

              {result.bucket !== null &&
              result.bucket !== undefined ? (
                <p>
                  Deterministic bucket:
                  <strong>
                    {" "}
                    {result.bucket}
                  </strong>
                  {" "}and rollout:
                  <strong>
                    {" "}
                    {result.rollout_percentage}%
                  </strong>
                  .
                </p>
              ) : (
                <p>
                  No rollout bucket was required for
                  this evaluation.
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