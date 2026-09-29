import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function GroupMembers() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { t } = useTranslation();

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [userId, setUserId] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchGroupData = async () => {
    try {
      setError("");

      const groupResponse = await fetch(
        `${API_BASE}/groups/${groupId}`
      );

      if (!groupResponse.ok) {
        throw new Error(t("groupNotFound"));
      }

      const groupData = await groupResponse.json();
      setGroup(groupData);

      const membersResponse = await fetch(
        `${API_BASE}/groups/${groupId}/users`
      );

      if (!membersResponse.ok) {
        throw new Error(t("couldNotLoadGroupMembers"));
      }

      const membersData = await membersResponse.json();
      setMembers(membersData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchGroupData();
  }, [groupId]);

  const addMember = async (e) => {
    e.preventDefault();

    if (!userId.trim()) {
      setError(t("userIdRequired"));
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/groups/${groupId}/users/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "access_token"
            )}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotAddUser")
        );
      }

      setMessage(t("userAddedSuccessfully"));
      setUserId("");

      fetchGroupData();
    } catch (err) {
      setError(err.message);
    }
  };

  const removeMember = async (memberId) => {
    const confirmed = window.confirm(
      t("confirmRemoveUser")
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/groups/${groupId}/users/${memberId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "access_token"
            )}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotRemoveUser")
        );
      }

      setMessage(t("userRemovedSuccessfully"));

      fetchGroupData();
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
            <button
              className="back-button"
              onClick={() => navigate("/groups")}
            >
              ← {t("backToGroups")}
            </button>

            <p className="eyebrow">
              {t("groupMembership")}
            </p>

            <h1>
              {group
                ? group.group_name
                : t("groupMembers")}
            </h1>

            <p>
              {t("groupMembersDescription")}
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
            <p>{t("groupId")}</p>
            <h2>#{groupId}</h2>
          </div>

          <div className="metric-card">
            <span>👥</span>
            <p>{t("totalMembers")}</p>
            <h2>{members.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>
            <p>{t("status")}</p>
            <h2 className="active-status">
              {t("active")}
            </h2>
          </div>
        </section>

        <section className="members-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {t("membershipDirectory")}
              </p>

              <h2>{t("groupMembers")}</h2>
            </div>

            <span className="count-badge">
              {members.length}{" "}
              {members.length !== 1
                ? t("members")
                : t("member")}
            </span>
          </div>

          {/* ADMIN ONLY: ADD USER */}
          {isAdmin && (
            <form
              className="add-member-form"
              onSubmit={addMember}
            >
              <div className="member-input-wrapper">
                <label>{t("userId")}</label>

                <input
                  type="number"
                  placeholder={t("enterUserId")}
                  value={userId}
                  onChange={(e) =>
                    setUserId(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                className="primary-button add-member-button"
              >
                + {t("addUser")}
              </button>
            </form>
          )}

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

          {members.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👥</div>

              <h3>{t("noMembersYet")}</h3>

              <p>
                {isAdmin
                  ? t("adminNoMembersDescription")
                  : t("userNoMembersDescription")}
              </p>
            </div>
          ) : (
            <div className="members-table-wrapper">
              <table className="members-table">
                <thead>
                  <tr>
                    <th>{t("user").toUpperCase()}</th>
                    <th>{t("userId").toUpperCase()}</th>
                    <th>{t("email").toUpperCase()}</th>
                    <th>{t("status").toUpperCase()}</th>
                    {isAdmin && (
                      <th>{t("action").toUpperCase()}</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {members.map((member) => (
                    <tr key={member.id}>
                      <td>
                        <div className="member-name-cell">
                          <div className="member-avatar">
                            {member.full_name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>
                            <strong>
                              {member.full_name}
                            </strong>

                            <span>
                              {t("groupMember")}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="id-badge">
                          #{member.id}
                        </span>
                      </td>

                      <td>
                        <span className="member-email">
                          {member.email}
                        </span>
                      </td>

                      <td>
                        <span className="active-badge">
                          {t("active")}
                        </span>
                      </td>

                      {/* ADMIN ONLY: REMOVE USER */}
                      {isAdmin && (
                        <td>
                          <button
                            className="action-button delete-button"
                            onClick={() =>
                              removeMember(member.id)
                            }
                          >
                            {t("remove")}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default GroupMembers;