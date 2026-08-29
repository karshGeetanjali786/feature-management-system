import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const email = localStorage.getItem("user_email") || "User";

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
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Environments</button>
          <button className="nav-item">Feature Flags</button>
          <button className="nav-item">Overrides</button>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item">Profile</button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">RELEASE CONTROL HUB</p>
            <h1>Feature Management Console</h1>
            <p>
              Manage feature flags, environments and configuration from one
              place.
            </p>
          </div>

          <div className="user-box">
            <span>Signed in as</span>
            <strong>{email}</strong>
          </div>
        </header>

        <section className="metrics-grid">
          <div className="metric-card">
            <span>◈</span>
            <p>Total Feature Flags</p>
            <h2>—</h2>
          </div>

          <div className="metric-card">
            <span>✓</span>
            <p>Active Flags</p>
            <h2>—</h2>
          </div>

          <div className="metric-card">
            <span>▣</span>
            <p>Environments</p>
            <h2>—</h2>
          </div>

          <div className="metric-card">
            <span>⚙</span>
            <p>Overrides</p>
            <h2>—</h2>
          </div>
        </section>

        <section className="welcome-card">
          <p className="eyebrow">WELCOME</p>
          <h2>You're inside the Feature Management System.</h2>
          <p>
            Your authentication is working successfully. The dashboard can be
            expanded with environment management, feature flags and evaluation
            controls as more project modules are implemented.
          </p>

          <button
            className="primary-button dashboard-button"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;