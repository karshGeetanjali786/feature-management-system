import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function Environments() {

  const [environments, setEnvironments] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const email = localStorage.getItem("user_email") || "User";

  const loadEnvironments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/environments/`);

      if (!response.ok) {
        throw new Error("Failed to load environments");
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
      setError("Environment name is required");
      return;
    }

    try {
      setError("");

      const response = await fetch(`${API_URL}/environments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to create environment");
      }

      setEnvironments((prev) => [...prev, data]);
      setName("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (environmentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this environment?"
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await fetch(
        `${API_URL}/environments/${environmentId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to delete environment");
      }

      setEnvironments((prev) =>
        prev.filter((environment) => environment.id !== environmentId)
      );
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
            <p className="eyebrow">CONFIGURATION</p>
            <h1>Environments</h1>
            <p>
              Create and manage environments used for feature flag
              configuration.
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
            <span>▣</span>
            <p>Total Environments</p>
            <h2>{environments.length}</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>
            <p>Available</p>
            <h2>{environments.length}</h2>
          </div>
        </section>

        <section className="welcome-card">
          <p className="eyebrow">CREATE ENVIRONMENT</p>
          <h2>Add Environment</h2>

          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Environment Name</label>

              <input
                type="text"
                placeholder="e.g. development"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <input
                type="text"
                placeholder="Environment description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="primary-button dashboard-button"
            >
              + Create Environment
            </button>
          </form>
        </section>

        <section className="welcome-card">
          <p className="eyebrow">ENVIRONMENT DIRECTORY</p>
          <h2>All Environments</h2>

          {loading ? (
            <p>Loading environments...</p>
          ) : environments.length === 0 ? (
            <p>No environments found.</p>
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
                        "No description provided"}
                    </p>
                  </div>

                  <button
                    className="logout-button"
                    onClick={() =>
                      handleDelete(environment.id)
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

export default Environments;