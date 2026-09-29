import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function Environments() {
  const { t } = useTranslation();

  const [environments, setEnvironments] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const loadEnvironments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/environments/`);

      if (!response.ok) {
        throw new Error(t("couldNotLoadEnvironments"));
      }

      const data = await response.json();
      setEnvironments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnvironments();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError(t("environmentNameRequired"));
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_URL}/environments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotCreateEnvironment")
        );
      }

      setEnvironments((prev) => [...prev, data]);
      setName("");
      setDescription("");
      setMessage(t("environmentCreated"));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (environmentId) => {
    const confirmed = window.confirm(
      t("confirmDeleteEnvironment")
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_URL}/environments/${environmentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotDeleteEnvironment")
        );
      }

      setEnvironments((prev) =>
        prev.filter((environment) => environment.id !== environmentId)
      );

      setMessage(t("environmentDeleted"));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">{t("configuration")}</p>

            <h1>{t("environments")}</h1>

            <p>{t("environmentsDescription")}</p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
            <strong>{email}</strong>
          </div>
        </header>

        {message && (
          <div className="status-message success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="status-message error-message">
            {error}
          </div>
        )}

        <section className="metrics-grid">
          <div className="metric-card">
            <span>▣</span>
            <p>{t("totalEnvironments")}</p>
            <h2>{environments.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>
            <p>{t("available")}</p>
            <h2>{environments.length}</h2>
          </div>
        </section>

        {/* CREATE ENVIRONMENT */}
        <section className="welcome-card">
          <p className="eyebrow">{t("createEnvironment")}</p>

          <h2>{t("addEnvironment")}</h2>

          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>{t("environmentName")}</label>

              <input
                type="text"
                placeholder={t("environmentNamePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>{t("description")}</label>

              <input
                type="text"
                placeholder={t("environmentDescriptionPlaceholder")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="primary-button dashboard-button"
            >
              + {t("createEnvironmentButton")}
            </button>
          </form>
        </section>

        {/* ENVIRONMENT DIRECTORY */}
        <section className="welcome-card">
          <p className="eyebrow">{t("environmentDirectory")}</p>

          <h2>{t("allEnvironments")}</h2>

          {loading ? (
            <p>{t("loadingEnvironments")}</p>
          ) : environments.length === 0 ? (
            <p>{t("noEnvironmentsFound")}</p>
          ) : (
            <div className="environment-list">
              {environments.map((environment) => (
                <div
                  className="environment-item"
                  key={environment.id}
                >
                  <div>
                    <h3>{environment.name}</h3>

                    <p>
                      {environment.description ||
                        t("noDescriptionProvided")}
                    </p>
                  </div>

                  {/* ADMIN ONLY DELETE */}
                  {isAdmin && (
                    <button
                      className="logout-button"
                      onClick={() =>
                        handleDelete(environment.id)
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

export default Environments;