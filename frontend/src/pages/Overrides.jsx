import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function Overrides() {

  const [overrides, setOverrides] = useState([]);
  const [flags, setFlags] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const [flagId, setFlagId] = useState("");
  const [environmentId, setEnvironmentId] = useState("");
  const [value, setValue] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const email = localStorage.getItem("user_email") || "User";

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [flagsResponse, environmentsResponse] =
        await Promise.all([
          fetch(`${API_URL}/feature-flags/`),
          fetch(`${API_URL}/environments/`),
        ]);

      if (!flagsResponse.ok || !environmentsResponse.ok) {
        throw new Error("Failed to load data");
      }

      const flagsData = await flagsResponse.json();
      const environmentsData = await environmentsResponse.json();

      setFlags(flagsData);
      setEnvironments(environmentsData);

      // Load existing overrides
      // Backend currently supports create/update/delete,
      // so we will keep the list locally after operations.
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!flagId || !environmentId) {
      setError("Please select a feature flag and environment");
      return;
    }

    try {
      setError("");

      const response = await fetch(
        `${API_URL}/environment-overrides/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            flag_id: Number(flagId),
            environment_id: Number(environmentId),
            value: value,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to create override"
        );
      }

      setOverrides((prev) => [...prev, data]);

      setFlagId("");
      setEnvironmentId("");
      setValue(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (overrideId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this override?"
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await fetch(
        `${API_URL}/environment-overrides/${overrideId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to delete override"
        );
      }

      setOverrides((prev) =>
        prev.filter((override) => override.id !== overrideId)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const getFlagName = (id) => {
    const flag = flags.find((item) => item.id === id);
    return flag ? flag.key : `Flag #${id}`;
  };

  const getEnvironmentName = (id) => {
    const environment = environments.find(
      (item) => item.id === id
    );

    return environment
      ? environment.name
      : `Environment #${id}`;
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">CONFIGURATION</p>

            <h1>Environment Overrides</h1>

            <p>
              Control feature flag values for specific environments.
            </p>
          </div>

          <div className="user-box">
            <span>Signed in as</span>
            <strong>{email}</strong>
          </div>
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <section className="metrics-grid">
          <div className="metric-card">
            <span>⚙</span>

            <p>Total Overrides</p>

            <h2>{overrides.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>

            <p>Active Configuration</p>

            <h2>{overrides.length}</h2>
          </div>
        </section>

        <section className="welcome-card">
          <p className="eyebrow">CREATE OVERRIDE</p>

          <h2>Add Environment Override</h2>

          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Feature Flag</label>

              <select
                value={flagId}
                onChange={(e) => setFlagId(e.target.value)}
              >
                <option value="">
                  Select feature flag
                </option>

                {flags.map((flag) => (
                  <option
                    key={flag.id}
                    value={flag.id}
                  >
                    {flag.key}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Environment</label>

              <select
                value={environmentId}
                onChange={(e) =>
                  setEnvironmentId(e.target.value)
                }
              >
                <option value="">
                  Select environment
                </option>

                {environments.map((environment) => (
                  <option
                    key={environment.id}
                    value={environment.id}
                  >
                    {environment.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Override Value</label>

              <select
                value={value ? "true" : "false"}
                onChange={(e) =>
                  setValue(e.target.value === "true")
                }
              >
                <option value="true">
                  Enabled / True
                </option>

                <option value="false">
                  Disabled / False
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="primary-button dashboard-button"
            >
              + Create Override
            </button>
          </form>
        </section>

        <section className="welcome-card">
          <p className="eyebrow">ACTIVE CONFIGURATION</p>

          <h2>Existing Overrides</h2>

          {loading ? (
            <p>Loading...</p>
          ) : overrides.length === 0 ? (
            <p>
              No overrides have been created during this session.
            </p>
          ) : (
            <div className="environment-list">
              {overrides.map((override) => (
                <div
                  className="environment-item"
                  key={override.id}
                >
                  <div>
                    <h3>
                      {getFlagName(override.flag_id)}
                    </h3>

                    <p>
                      Environment:{" "}
                      {getEnvironmentName(
                        override.environment_id
                      )}
                    </p>

                    <p>
                      Value:{" "}
                      <strong>
                        {override.value
                          ? "Enabled"
                          : "Disabled"}
                      </strong>
                    </p>
                  </div>

                  <button
                    className="logout-button"
                    onClick={() =>
                      handleDelete(override.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Overrides;