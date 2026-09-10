import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000";

function GroupMembers() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  const email = localStorage.getItem("user_email") || "User";

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
        throw new Error("Group not found.");
      }

      const groupData = await groupResponse.json();
      setGroup(groupData);

      const membersResponse = await fetch(
        `${API_BASE}/groups/${groupId}/users`
      );

      if (!membersResponse.ok) {
        throw new Error("Could not load group members.");
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
      setError("Please enter a User ID.");
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/groups/${groupId}/users/${userId}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not add user.");
      }

      setMessage("User added successfully.");
      setUserId("");

      fetchGroupData();
    } catch (err) {
      setError(err.message);
    }
  };

  const removeMember = async (memberId) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this user?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/groups/${groupId}/users/${memberId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not remove user.");
      }

      setMessage("User removed successfully.");

      fetchGroupData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");

    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon small">✦</div>

          <div>
            <h2>Feature Management</h2>
            <span>Control Console</span>
          </div>
        </div>

        <nav>
          <button
            className="nav-item"
            onClick={() => navigate("/home")}
          >
            Dashboard
          </button>

          <button className="nav-item">
            Environments
          </button>

          <button className="nav-item">
            Feature Flags
          </button>

          <button className="nav-item">
            Overrides
          </button>

          <button
            className="nav-item active"
            onClick={() => navigate("/groups")}
          >
            Groups
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/targeting-rules")}
          >
            Targeting Rules
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item">
            Profile
          </button>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <button
              className="back-button"
              onClick={() => navigate("/groups")}
            >
              ← Back to Groups
            </button>

            <p className="eyebrow">GROUP MEMBERSHIP</p>

            <h1>
              {group ? group.group_name : "Group Members"}
            </h1>

            <p>
              Manage users belonging to this targeting group.
            </p>
          </div>

          <div className="user-box">
            <span>Signed in as</span>
            <strong>{email}</strong>
          </div>
        </header>

        <section className="member-metrics">
          <div className="metric-card">
            <span>◈</span>
            <p>Group ID</p>
            <h2>#{groupId}</h2>
          </div>

          <div className="metric-card">
            <span>👥</span>
            <p>Total Members</p>
            <h2>{members.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>
            <p>Status</p>
            <h2 className="active-status">Active</h2>
          </div>
        </section>

        <section className="members-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEMBERSHIP DIRECTORY</p>
              <h2>Group Members</h2>
            </div>

            <span className="count-badge">
              {members.length} member
              {members.length !== 1 ? "s" : ""}
            </span>
          </div>

          <form
            className="add-member-form"
            onSubmit={addMember}
          >
            <div className="member-input-wrapper">
              <label>User ID</label>

              <input
                type="number"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="primary-button add-member-button"
            >
              + Add User
            </button>
          </form>

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

              <h3>No members yet</h3>

              <p>
                Add a user to this group to use it for
                feature targeting.
              </p>
            </div>
          ) : (
            <div className="members-table-wrapper">
              <table className="members-table">
                <thead>
                  <tr>
                    <th>USER</th>
                    <th>USER ID</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
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
                              Group member
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
                          Active
                        </span>
                      </td>

                      <td>
                        <button
                          className="action-button delete-button"
                          onClick={() =>
                            removeMember(member.id)
                          }
                        >
                          Remove
                        </button>
                      </td>
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