import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

const API_BASE = "http://127.0.0.1:8000";

function FeatureFlags() {
  const { t } = useTranslation();

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const [flags, setFlags] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const [formData, setFormData] = useState({
    key: "",
    description: "",
    type: "boolean",
    default_value: false,
    enabled: true,
    rollout_percentage: 0,
    owner_team: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchFlags = async () => {
    try {
      setError("");

      const response = await fetch(`${API_BASE}/feature-flags/`);

      if (!response.ok) {
        throw new Error(t("couldNotLoadFeatureFlags"));
      }

      const data = await response.json();
      setFlags(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "rollout_percentage"
          ? Number(value)
          : value,
    }));
  };

  const createFlag = async (e) => {
    e.preventDefault();

    if (!formData.key.trim()) {
      setError(t("featureFlagKeyRequired"));
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/feature-flags/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          ...formData,
          key: formData.key.trim(),
          description: formData.description.trim() || null,
          owner_team: formData.owner_team.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotCreateFeatureFlag")
        );
      }

      setMessage(t("featureFlagCreated"));

      setFormData({
        key: "",
        description: "",
        type: "boolean",
        default_value: false,
        enabled: true,
        rollout_percentage: 0,
        owner_team: "",
      });

      setShowCreate(false);
      fetchFlags();
    } catch (err) {
      setError(err.message);
    }
  };

  const updateRollout = async (flag, percentage) => {
    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/feature-flags/${flag.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            rollout_percentage: Number(percentage),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotUpdateRollout")
        );
      }

      setMessage(
        t("rolloutUpdated", {
          key: flag.key,
          percentage: percentage,
        })
      );

      fetchFlags();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteFlag = async (flagId) => {
    const confirmed = window.confirm(
      t("confirmDeleteFeatureFlag")
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/feature-flags/${flagId}`,
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
          data.detail || t("couldNotDeleteFeatureFlag")
        );
      }

      setMessage(t("featureFlagDeleted"));
      fetchFlags();
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
            <p className="eyebrow">
              {t("releaseControl")}
            </p>

            <h1>
              {t("featureFlags")}
            </h1>

            <p>
              {t("featureFlagsDescription")}
            </p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
            <strong>{email}</strong>
          </div>
        </header>

        <section className="member-metrics">
          <div className="metric-card">
            <span>◈</span>

            <p>{t("totalFlags")}</p>

            <h2>{flags.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>

            <p>{t("enabledFlags")}</p>

            <h2>
              {flags.filter((flag) => flag.enabled).length}
            </h2>
          </div>

          <div className="metric-card">
            <span>%</span>

            <p>{t("rolloutEnabled")}</p>

            <h2>
              {
                flags.filter(
                  (flag) =>
                    Number(flag.rollout_percentage) > 0
                ).length
              }
            </h2>
          </div>
        </section>

        <section className="flags-toolbar">
          <div>
            <p className="eyebrow">
              {t("flagDirectory")}
            </p>

            <h2>
              {t("allFeatureFlags")}
            </h2>
          </div>

          <button
            className="primary-button create-group-button"
            onClick={() => {
              setShowCreate(true);
              setError("");
              setMessage("");
            }}
          >
            + {t("createFeatureFlag")}
          </button>
        </section>

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

        {flags.length === 0 ? (
          <section className="empty-state flags-empty">
            <div className="empty-icon">◈</div>

            <h3>
              {t("noFeatureFlags")}
            </h3>

            <p>
              {t("featureFlagEmptyText")}
            </p>
          </section>
        ) : (
          <section className="flags-section">
            <div className="flags-table-wrapper">
              <table className="flags-table">
                <thead>
                  <tr>
                    <th>{t("flag")}</th>
                    <th>{t("status")}</th>
                    <th>{t("rollout")}</th>
                    <th>{t("owner")}</th>
                    <th>{t("action")}</th>
                  </tr>
                </thead>

                <tbody>
                  {flags.map((flag) => (
                    <tr key={flag.id}>
                      <td>
                        <div className="flag-name-cell">
                          <div className="rule-icon">
                            ⚑
                          </div>

                          <div>
                            <strong>
                              {flag.key}
                            </strong>

                            <span>
                              ID #{flag.id} · {flag.type}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={
                            flag.enabled
                              ? "active-badge"
                              : "disabled-badge"
                          }
                        >
                          {flag.enabled
                            ? t("enabled")
                            : t("disabled")}
                        </span>
                      </td>

                      <td>
                        <div className="rollout-control">
                          <div className="rollout-value">
                            <strong>
                              {flag.rollout_percentage}%
                            </strong>
                          </div>

                          {isAdmin ? (
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={
                                flag.rollout_percentage
                              }
                              onChange={(e) => {
                                const value =
                                  Number(e.target.value);

                                setFlags((prev) =>
                                  prev.map((item) =>
                                    item.id === flag.id
                                      ? {
                                          ...item,
                                          rollout_percentage:
                                            value,
                                        }
                                      : item
                                  )
                                );
                              }}
                              onMouseUp={(e) =>
                                updateRollout(
                                  flag,
                                  Number(
                                    e.target.value
                                  )
                                )
                              }
                              onTouchEnd={(e) =>
                                updateRollout(
                                  flag,
                                  Number(
                                    e.target.value
                                  )
                                )
                              }
                            />
                          ) : (
                            <span className="owner-text">
                              {t("viewOnly")}
                            </span>
                          )}
                        </div>
                      </td>

                      <td>
                        <span className="owner-text">
                          {flag.owner_team || "—"}
                        </span>
                      </td>

                      <td>
                        {isAdmin && (
                          <button
                            className="action-button delete-button"
                            onClick={() =>
                              deleteFlag(flag.id)
                            }
                          >
                            {t("delete")}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {showCreate && (
          <div
            className="modal-overlay"
            onClick={() =>
              setShowCreate(false)
            }
          >
            <div
              className="modal-card flag-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <div className="modal-header">
                <div>
                  <p className="eyebrow">
                    {t("newFlag")}
                  </p>

                  <h2>
                    {t("createFeatureFlag")}
                  </h2>
                </div>

                <button
                  className="modal-close"
                  onClick={() =>
                    setShowCreate(false)
                  }
                >
                  ×
                </button>
              </div>

              <form onSubmit={createFlag}>
                <div className="two-column-form">
                  <div className="form-group">
                    <label>
                      {t("flagKey")}
                    </label>

                    <input
                      type="text"
                      name="key"
                      placeholder="e.g. new_dashboard"
                      value={formData.key}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      {t("type")}
                    </label>

                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="boolean">
                        Boolean
                      </option>

                      <option value="string">
                        String
                      </option>

                      <option value="number">
                        Number
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    {t("description")}
                  </label>

                  <input
                    type="text"
                    name="description"
                    placeholder={t(
                      "flagDescriptionPlaceholder"
                    )}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="two-column-form">
                  <div className="form-group">
                    <label>
                      {t("ownerTeam")}
                    </label>

                    <input
                      type="text"
                      name="owner_team"
                      placeholder="e.g. Frontend"
                      value={formData.owner_team}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      {t("rolloutPercentage")}
                    </label>

                    <div className="create-rollout-control">
                      <input
                        type="range"
                        name="rollout_percentage"
                        min="0"
                        max="100"
                        value={
                          formData.rollout_percentage
                        }
                        onChange={handleChange}
                      />

                      <strong>
                        {
                          formData.rollout_percentage
                        }%
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="enabled"
                      checked={
                        formData.enabled
                      }
                      onChange={handleChange}
                    />

                    {t("enableFeatureFlag")}
                  </label>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                      setShowCreate(false)
                    }
                  >
                    {t("cancel")}
                  </button>

                  <button
                    type="submit"
                    className="primary-button"
                  >
                    {t("createFlag")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default FeatureFlags;