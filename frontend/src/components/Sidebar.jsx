import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useTranslation();

  const navItems = [
    { label: t("home"), path: "/home" },
    { label: t("environments"), path: "/environments" },
    { label: t("featureFlags"), path: "/feature-flags" },
    { label: t("overrides"), path: "/overrides" },
    { label: t("groups"), path: "/groups" },
    {
      label: t("targetingRules"),
      path: "/targeting-rules",
    },
    {
      label: t("evaluationTester"),
      path: "/evaluation-tester",
    },
    {
      label: t("auditLogs"),
      path: "/audit-logs",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_role");

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      {/* BRAND */}
      <div className="sidebar-brand">

        <div className="brand-icon small">
          ✦
        </div>

        <div>
          <h2>
            Feature Management
          </h2>

          <span>
            Control Console
          </span>
        </div>

      </div>
      
      {/* LANGUAGE */}
      <LanguageSelector />

      {/* NAVIGATION */}
      <nav>

        {navItems.map((item) => (

          <button
            key={item.path}
            className={`nav-item ${
              location.pathname === item.path
                ? "active"
                : ""
            }`}
            onClick={() =>
              navigate(item.path)
            }
          >
            {item.label}
          </button>

        ))}

      </nav>


      {/* BOTTOM */}
      <div className="sidebar-bottom">


        {/* PROFILE */}
        <button
          className="nav-item"
          onClick={() => {}}
        >
          Profile
        </button>


        {/* LOGOUT */}
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          {t("logout")}
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;