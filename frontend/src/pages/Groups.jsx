import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function Groups() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const fetchGroups = async () => {
    try {
      setError("");

      const response = await fetch(`${API_BASE}/groups/`);

      if (!response.ok) {
        throw new Error(t("couldNotLoadGroups"));
      }

      const data = await response.json();
      setGroups(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const createGroup = async (e) => {
    e.preventDefault();

    if (!groupName.trim()) {
      setError(t("groupNameRequired"));
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/groups/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          group_name: groupName.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || t("couldNotCreateGroup"));
      }

      setMessage(t("groupCreated"));
      setGroupName("");
      setShowCreate(false);
      fetchGroups();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteGroup = async (groupId) => {
    const confirmed = window.confirm(t("confirmDeleteGroup"));

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/groups/${groupId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || t("couldNotDeleteGroup"));
      }

      setMessage(t("groupDeleted"));
      fetchGroups();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredGroups = groups.filter((group) =>
    group.group_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">{t("userManagement")}</p>

            <h1>{t("userGroups")}</h1>

            <p>{t("userGroupsDescription")}</p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
            <strong>{email}</strong>
          </div>
        </header>

        <section className="group-toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder={t("searchGroups")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Only Admin can create groups */}
          {isAdmin && (
            <button
              className="primary-button create-group-button"
              onClick={() => {
                setShowCreate(true);
                setError("");
                setMessage("");
              }}
            >
              + {t("createGroup")}
            </button>
          )}
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

        <section className="groups-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("groupDirectory")}</p>
              <h2>{t("allGroups")}</h2>
            </div>

            <span className="count-badge">
              {filteredGroups.length}{" "}
              {filteredGroups.length !== 1
                ? t("groups")
                : t("group")}
            </span>
          </div>

          {filteredGroups.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◈</div>

              <h3>{t("noGroupsFound")}</h3>

              <p>{t("noGroupsDescription")}</p>

              {isAdmin && (
                <button
                  className="primary-button"
                  onClick={() => setShowCreate(true)}
                >
                  + {t("createGroup")}
                </button>
              )}
            </div>
          ) : (
            <div className="groups-table-wrapper">
              <table className="groups-table">
                <thead>
                  <tr>
                    <th>{t("group")}</th>
                    <th>{t("groupId")}</th>
                    <th>{t("created")}</th>
                    <th>{t("actions")}</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredGroups.map((group) => (
                    <tr key={group.id}>
                      <td>
                        <div className="group-name-cell">
                          <div className="group-avatar">
                            {group.group_name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>
                            <strong>{group.group_name}</strong>
                            <span>{t("userTargetingGroup")}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="id-badge">
                          #{group.id}
                        </span>
                      </td>

                      <td>
                        <span className="date-text">
                          {group.created_at
                            ? new Date(
                                group.created_at
                              ).toLocaleDateString()
                            : "—"}
                        </span>
                      </td>

                      <td>
                        <div className="table-actions">
                          {/* Both User and Admin can view members */}
                          <button
                            className="action-button view-button"
                            onClick={() =>
                              navigate(
                                `/groups/${group.id}/members`
                              )
                            }
                          >
                            {t("viewMembers")}
                          </button>

                          {/* Admin only */}
                          {isAdmin && (
                            <button
                              className="action-button delete-button"
                              onClick={() =>
                                deleteGroup(group.id)
                              }
                            >
                              {t("delete")}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {showCreate && (
          <div
            className="modal-overlay"
            onClick={() => setShowCreate(false)}
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <p className="eyebrow">{t("newGroup")}</p>
                  <h2>{t("createUserGroup")}</h2>
                </div>

                <button
                  className="modal-close"
                  onClick={() => setShowCreate(false)}
                >
                  ×
                </button>
              </div>

              <form onSubmit={createGroup}>
                <div className="form-group">
                  <label>{t("groupName")}</label>

                  <input
                    type="text"
                    placeholder={t("groupNamePlaceholder")}
                    value={groupName}
                    onChange={(e) =>
                      setGroupName(e.target.value)
                    }
                    autoFocus
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => setShowCreate(false)}
                  >
                    {t("cancel")}
                  </button>

                  <button
                    type="submit"
                    className="primary-button"
                  >
                    {t("createGroup")}
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

export default Groups;