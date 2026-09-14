import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function Groups() {
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const fetchGroups = async () => {
    try {
      setError("");

      const response = await fetch(`${API_BASE}/groups/`);

      if (!response.ok) {
        throw new Error("Could not load groups.");
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
      setError("Please enter a group name.");
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/groups/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          group_name: groupName.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not create group.");
      }

      setMessage("Group created successfully.");
      setGroupName("");
      setShowCreate(false);
      fetchGroups();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteGroup = async (groupId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this group?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/groups/${groupId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not delete group.");
      }

      setMessage("Group deleted successfully.");
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
            <p className="eyebrow">USER MANAGEMENT</p>

            <h1>User Groups</h1>

            <p>
              Create and manage groups used for feature flag targeting.
            </p>
          </div>

          <div className="user-box">
            <span>Total Groups</span>
            <strong>{groups.length}</strong>
          </div>
        </header>

        <section className="group-toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search groups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            className="primary-button create-group-button"
            onClick={() => {
              setShowCreate(true);
              setError("");
              setMessage("");
            }}
          >
            + Create Group
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

        <section className="groups-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GROUP DIRECTORY</p>
              <h2>All Groups</h2>
            </div>

            <span className="count-badge">
              {filteredGroups.length} group
              {filteredGroups.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredGroups.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◈</div>

              <h3>No groups found</h3>

              <p>
                Create your first user group to start targeting features.
              </p>

              <button
                className="primary-button"
                onClick={() => setShowCreate(true)}
              >
                + Create Group
              </button>
            </div>
          ) : (
            <div className="groups-table-wrapper">
              <table className="groups-table">
                <thead>
                  <tr>
                    <th>GROUP</th>
                    <th>GROUP ID</th>
                    <th>CREATED</th>
                    <th>ACTIONS</th>
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
                            <span>User targeting group</span>
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
                          <button
                            className="action-button view-button"
                            onClick={() =>
                              navigate(
                                `/groups/${group.id}/members`
                              )
                            }
                          >
                            View Members
                          </button>

                          <button
                            className="action-button delete-button"
                            onClick={() =>
                              deleteGroup(group.id)
                            }
                          >
                            Delete
                          </button>
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
                  <p className="eyebrow">NEW GROUP</p>
                  <h2>Create User Group</h2>
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
                  <label>Group Name</label>

                  <input
                    type="text"
                    placeholder="e.g. beta_users"
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
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary-button"
                  >
                    Create Group
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