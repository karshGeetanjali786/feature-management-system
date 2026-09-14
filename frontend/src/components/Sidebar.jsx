import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/home" },
    { label: "Environments", path: "/environments" },
    { label: "Feature Flags", path: "/feature-flags" },
    { label: "Overrides", path: "/overrides" },
    { label: "Groups", path: "/groups" },
    { label: "Targeting Rules", path: "/targeting-rules" },
    { label: "Evaluation Tester", path: "/evaluation-tester" },
    { label: "Audit Logs", path: "/audit-logs" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon small">✦</div>

        <div>
          <h2>Feature Management</h2>
          <span>Control Console</span>
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
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
  );
}

export default Sidebar;