import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function Overrides() {
  const { t } = useTranslation();

  const [overrides, setOverrides] = useState([]);
  const [flags, setFlags] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const [flagId, setFlagId] = useState("");
  const [environmentId, setEnvironmentId] = useState("");
  const [value, setValue] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const token = localStorage.getItem("access_token");

  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [flagsResponse, environmentsResponse, overridesResponse] =
        await Promise.all([
          fetch(`${API_URL}/feature-flags/`, {
            headers: authHeaders,
          }),
          fetch(`${API_URL}/environments/`, {
            headers: authHeaders,
          }),
          fetch(`${API_URL}/environment-overrides/`, {
            headers: authHeaders,
          }),
        ]);

      if (
        !flagsResponse.ok ||
        !environmentsResponse.ok ||
        !overridesResponse.ok
      ) {
        throw new Error(t("couldNotLoadOverridesData"));
      }

      const flagsData = await flagsResponse.json();
      const environmentsData = await environmentsResponse.json();
      const overridesData = await overridesResponse.json();

      setFlags(flagsData);
      setEnvironments(environmentsData);
      setOverrides(overridesData);
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
      setError(t("selectFlagAndEnvironment"));
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
            ...authHeaders,
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
          data.detail || t("couldNotCreateOverride")
        );
      }

      setOverrides((prev) => [...prev, data]);

      setFlagId("");
      setEnvironmentId("");
      setValue(true);

      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (overrideId) => {
    const confirmed = window.confirm(
      t("confirmDeleteOverride")
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await fetch(
        `${API_URL}/environment-overrides/${overrideId}`,
        {
          method: "DELETE",
          headers: {
            ...authHeaders,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotDeleteOverride")
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

    return flag ? flag.key : `${t("flag")} #${id}`;
  };

  const getEnvironmentName = (id) => {
    const environment = environments.find(
      (item) => item.id === id
    );

    return environment
      ? environment.name
      : `${t("environment")} #${id}`;
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">{t("configuration")}</p>

            <h1>{t("environmentOverrides")}</h1>

            <p>{t("environmentOverridesDescription")}</p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
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

            <p>{t("totalOverrides")}</p>

            <h2>{overrides.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>

            <p>{t("activeConfiguration")}</p>

            <h2>{overrides.length}</h2>
          </div>
        </section>

        {/* CREATE OVERRIDE - ADMIN ONLY */}
        {isAdmin && (
          <section className="welcome-card">
            <p className="eyebrow">{t("createOverride")}</p>

            <h2>{t("addEnvironmentOverride")}</h2>

            <form onSubmit={handleCreate}>
              <div className="form-group">
                <label>{t("featureFlag")}</label>

                <select
                  value={flagId}
                  onChange={(e) =>
                    setFlagId(e.target.value)
                  }
                >
                  <option value="">
                    {t("selectFeatureFlag")}
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
                <label>{t("environment")}</label>

                <select
                  value={environmentId}
                  onChange={(e) =>
                    setEnvironmentId(e.target.value)
                  }
                >
                  <option value="">
                    {t("selectEnvironment")}
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
                <label>{t("overrideValue")}</label>

                <select
                  value={value ? "true" : "false"}
                  onChange={(e) =>
                    setValue(e.target.value === "true")
                  }
                >
                  <option value="true">
                    {t("enabledTrue")}
                  </option>

                  <option value="false">
                    {t("disabledFalse")}
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="primary-button dashboard-button"
              >
                + {t("createOverrideButton")}
              </button>
            </form>
          </section>
        )}

        {/* EXISTING OVERRIDES */}
        <section className="welcome-card">
          <p className="eyebrow">{t("activeConfiguration")}</p>

          <h2>{t("existingOverrides")}</h2>

          {loading ? (
            <p>{t("loading")}</p>
          ) : overrides.length === 0 ? (
            <p>{t("noEnvironmentOverrides")}</p>
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
                      {t("environment")}:{" "}
                      {getEnvironmentName(
                        override.environment_id
                      )}
                    </p>

                    <p>
                      {t("value")}:{" "}
                      <strong>
                        {override.value
                          ? t("enabled")
                          : t("disabled")}
                      </strong>
                    </p>
                  </div>

                  {/* DELETE - ADMIN ONLY */}
                  {isAdmin && (
                    <button
                      className="logout-button"
                      onClick={() =>
                        handleDelete(override.id)
                      }
                    >
                      {t("delete")}
                    </button>
                  )}
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