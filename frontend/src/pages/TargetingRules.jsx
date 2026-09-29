import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

const API_BASE = "http://127.0.0.1:8000";

function TargetingRules() {
  const { t } = useTranslation();

  const email = localStorage.getItem("user_email") || "User";
  const role = localStorage.getItem("user_role") || "user";
  const isAdmin = role === "admin";

  const [rules, setRules] = useState([]);
  const [flags, setFlags] = useState([]);
  const [groups, setGroups] = useState([]);

  const [flagId, setFlagId] = useState("");
  const [ruleType, setRuleType] = useState("user");
  const [ruleValue, setRuleValue] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");

    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
  };

  const fetchData = async () => {
    try {
      setError("");

      const token = localStorage.getItem("access_token");

      if (!token) {
        setError(t("notAuthenticated"));
        return;
      }

      const authHeaders = {
        Authorization: `Bearer ${token}`,
      };

      const [
        rulesResponse,
        flagsResponse,
        groupsResponse,
      ] = await Promise.all([
        fetch(`${API_BASE}/targeting-rules/`, {
          headers: authHeaders,
        }),
        fetch(`${API_BASE}/feature-flags/`, {
          headers: authHeaders,
        }),
        fetch(`${API_BASE}/groups/`, {
          headers: authHeaders,
        }),
      ]);

      if (rulesResponse.status === 401) {
        setError(t("sessionExpired"));
        localStorage.removeItem("access_token");
        return;
      }

      if (!rulesResponse.ok) {
        throw new Error(t("couldNotLoadTargetingRules"));
      }

      const rulesData = await rulesResponse.json();
      setRules(rulesData);

      if (flagsResponse.ok) {
        const flagsData = await flagsResponse.json();
        setFlags(flagsData);
      }

      if (groupsResponse.ok) {
        const groupsData = await groupsResponse.json();
        setGroups(groupsData);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createRule = async (e) => {
    e.preventDefault();

    if (!flagId || !ruleValue.trim()) {
      setError(t("featureFlagAndRuleRequired"));
      return;
    }

    try {
      setError("");
      setMessage("");

      const token = localStorage.getItem("access_token");

      if (!token) {
        setError(t("notAuthenticated"));
        return;
      }

      const response = await fetch(
        `${API_BASE}/targeting-rules/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            flag_id: Number(flagId),
            rule_type: ruleType,
            rule_value: ruleValue.trim(),
          }),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        setError(t("sessionExpired"));
        localStorage.removeItem("access_token");
        return;
      }

      if (response.status === 403) {
        setError(t("adminAccessRequired"));
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotCreateTargetingRule")
        );
      }

      setMessage(t("targetingRuleCreated"));

      setFlagId("");
      setRuleValue("");

      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteRule = async (ruleId) => {
    const confirmed = window.confirm(
      t("confirmDeleteTargetingRule")
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const token = localStorage.getItem("access_token");

      if (!token) {
        setError(t("notAuthenticated"));
        return;
      }

      const response = await fetch(
        `${API_BASE}/targeting-rules/${ruleId}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        setError(t("sessionExpired"));
        localStorage.removeItem("access_token");
        return;
      }

      if (response.status === 403) {
        setError(t("adminAccessRequired"));
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.detail || t("couldNotDeleteTargetingRule")
        );
      }

      setMessage(t("targetingRuleDeleted"));

      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const getFlagName = (id) => {
    const flag = flags.find(
      (item) => item.id === id
    );

    return flag
      ? flag.key
      : `${t("flag")} #${id}`;
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">
              {t("audienceTargeting")}
            </p>

            <h1>{t("targetingRules")}</h1>

            <p>
              {t("targetingRulesDescription")}
            </p>
          </div>

          <div className="user-box">
            <span>{t("signedInAs")}</span>
            <strong>{email}</strong>
          </div>
        </header>

        {error && (
          <div className="status-message error-message">
            {error}
          </div>
        )}

        {message && (
          <div className="status-message success-message">
            {message}
          </div>
        )}

        <section className="member-metrics">
          <div className="metric-card">
            <span>◈</span>
            <p>{t("totalRules")}</p>
            <h2>{rules.length}</h2>
          </div>

          <div className="metric-card">
            <span>●</span>
            <p>{t("userRules")}</p>
            <h2>
              {
                rules.filter(
                  (rule) => rule.rule_type === "user"
                ).length
              }
            </h2>
          </div>

          <div className="metric-card">
            <span>◆</span>
            <p>{t("groupRules")}</p>
            <h2>
              {
                rules.filter(
                  (rule) => rule.rule_type === "group"
                ).length
              }
            </h2>
          </div>
        </section>

        {isAdmin && (
          <section className="targeting-create-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {t("createRule")}
                </p>

                <h2>{t("addTargetingRule")}</h2>
              </div>
            </div>

            <form
              className="targeting-form"
              onSubmit={createRule}
            >
              <div className="targeting-field">
                <label>{t("featureFlag")}</label>

                <select
                  value={flagId}
                  onChange={(e) =>
                    setFlagId(e.target.value)
                  }
                >
                  <option value="">
                    {t("selectFeatureFlag")}
                  </option>

                  {flags.map((flag) => (
                    <option
                      key={flag.id}
                      value={flag.id}
                    >
                      {flag.key} (#{flag.id})
                    </option>
                  ))}
                </select>
              </div>

              <div className="targeting-field">
                <label>{t("ruleType")}</label>

                <select
                  value={ruleType}
                  onChange={(e) => {
                    setRuleType(e.target.value);
                    setRuleValue("");
                  }}
                >
                  <option value="user">
                    {t("user")}
                  </option>

                  <option value="group">
                    {t("group")}
                  </option>
                </select>
              </div>

              <div className="targeting-field">
                <label>
                  {ruleType === "user"
                    ? t("userId")
                    : t("group")}
                </label>

                {ruleType === "group" ? (
                  <select
                    value={ruleValue}
                    onChange={(e) =>
                      setRuleValue(e.target.value)
                    }
                  >
                    <option value="">
                      {t("selectGroup")}
                    </option>

                    {groups.map((group) => (
                      <option
                        key={group.id}
                        value={group.group_name}
                      >
                        {group.group_name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    placeholder={t("enterUserId")}
                    value={ruleValue}
                    onChange={(e) =>
                      setRuleValue(e.target.value)
                    }
                  />
                )}
              </div>

              <button
                type="submit"
                className="primary-button targeting-submit"
              >
                + {t("addRule")}
              </button>
            </form>
          </section>
        )}

        <section className="targeting-rules-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {t("activeConfiguration")}
              </p>

              <h2>{t("existingRules")}</h2>
            </div>

            <span className="count-badge">
              {rules.length}{" "}
              {rules.length !== 1
                ? t("rules")
                : t("rule")}
            </span>
          </div>

          {rules.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                ◎
              </div>

              <h3>{t("noTargetingRules")}</h3>

              <p>
                {isAdmin
                  ? t("addTargetingRuleToStart")
                  : t("noTargetingRulesAvailable")}
              </p>
            </div>
          ) : (
            <div className="groups-table-wrapper">
              <table className="targeting-table">
                <thead>
                  <tr>
                    <th>{t("rule").toUpperCase()}</th>
                    <th>{t("featureFlag").toUpperCase()}</th>
                    <th>{t("type").toUpperCase()}</th>
                    <th>{t("target").toUpperCase()}</th>

                    {isAdmin && (
                      <th>{t("action").toUpperCase()}</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {rules.map((rule) => (
                    <tr key={rule.id}>
                      <td>
                        <span className="rule-id">
                          #{rule.id}
                        </span>
                      </td>

                      <td>
                        <div className="flag-name-cell">
                          <div className="rule-icon">
                            ⚑
                          </div>

                          <div>
                            <strong>
                              {getFlagName(
                                rule.flag_id
                              )}
                            </strong>

                            <span>
                              {t("flagId")} #
                              {rule.flag_id}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={
                            rule.rule_type === "user"
                              ? "rule-type-badge user-rule"
                              : "rule-type-badge group-rule"
                          }
                        >
                          {rule.rule_type === "user"
                            ? t("user")
                            : t("group")}
                        </span>
                      </td>

                      <td>
                        <span className="target-value">
                          {rule.rule_value}
                        </span>
                      </td>

                      {isAdmin && (
                        <td>
                          <button
                            className="action-button delete-button"
                            onClick={() =>
                              deleteRule(rule.id)
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

export default TargetingRules;