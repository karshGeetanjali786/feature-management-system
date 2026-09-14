import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function TargetingRules() {

  const email = localStorage.getItem("user_email") || "User";

  const [rules, setRules] = useState([]);
  const [flags, setFlags] = useState([]);
  const [groups, setGroups] = useState([]);

  const [flagId, setFlagId] = useState("");
  const [ruleType, setRuleType] = useState("user");
  const [ruleValue, setRuleValue] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      setError("");

      const [rulesResponse, flagsResponse, groupsResponse] =
        await Promise.all([
          fetch(`${API_BASE}/targeting-rules/`),
          fetch(`${API_BASE}/feature-flags/`),
          fetch(`${API_BASE}/groups/`),
        ]);

      if (!rulesResponse.ok) {
        throw new Error("Could not load targeting rules.");
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
      setError("Please enter Feature Flag and Rule Value.");
      return;
    }

    try {
      setError("");
      setMessage("");

      const response = await fetch(`${API_BASE}/targeting-rules/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flag_id: Number(flagId),
          rule_type: ruleType,
          rule_value: ruleValue.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not create targeting rule.");
      }

      setMessage("Targeting rule created successfully.");
      setFlagId("");
      setRuleValue("");

      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteRule = async (ruleId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this targeting rule?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      const response = await fetch(
        `${API_BASE}/targeting-rules/${ruleId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not delete targeting rule.");
      }

      setMessage("Targeting rule deleted successfully.");
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const getFlagName = (id) => {
    const flag = flags.find((item) => item.id === id);
    return flag ? flag.key : `Flag #${id}`;
  };

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">AUDIENCE TARGETING</p>

            <h1>Targeting Rules</h1>

            <p>
              Control which users and groups receive specific feature flags.
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
            <p>Total Rules</p>
            <h2>{rules.length}</h2>
          </div>

          <div className="metric-card">
            <span>●</span>
            <p>User Rules</p>
            <h2>
              {rules.filter((rule) => rule.rule_type === "user").length}
            </h2>
          </div>

          <div className="metric-card">
            <span>◆</span>
            <p>Group Rules</p>
            <h2>
              {rules.filter((rule) => rule.rule_type === "group").length}
            </h2>
          </div>
        </section>

        <section className="targeting-create-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CREATE RULE</p>
              <h2>Add Targeting Rule</h2>
            </div>
          </div>

          <form
            className="targeting-form"
            onSubmit={createRule}
          >
            <div className="targeting-field">
              <label>Feature Flag</label>

              <select
                value={flagId}
                onChange={(e) => setFlagId(e.target.value)}
              >
                <option value="">Select feature flag</option>

                {flags.map((flag) => (
                  <option key={flag.id} value={flag.id}>
                    {flag.key} (#{flag.id})
                  </option>
                ))}
              </select>
            </div>

            <div className="targeting-field">
              <label>Rule Type</label>

              <select
                value={ruleType}
                onChange={(e) => {
                  setRuleType(e.target.value);
                  setRuleValue("");
                }}
              >
                <option value="user">User</option>
                <option value="group">Group</option>
              </select>
            </div>

            <div className="targeting-field">
              <label>
                {ruleType === "user" ? "User ID" : "Group"}
              </label>

              {ruleType === "group" ? (
                <select
                  value={ruleValue}
                  onChange={(e) => setRuleValue(e.target.value)}
                >
                  <option value="">Select group</option>

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
                  placeholder="Enter user ID"
                  value={ruleValue}
                  onChange={(e) => setRuleValue(e.target.value)}
                />
              )}
            </div>

            <button
              type="submit"
              className="primary-button targeting-submit"
            >
              + Add Rule
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
        </section>

        <section className="targeting-rules-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ACTIVE CONFIGURATION</p>
              <h2>Existing Rules</h2>
            </div>

            <span className="count-badge">
              {rules.length} rule{rules.length !== 1 ? "s" : ""}
            </span>
          </div>

          {rules.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◎</div>

              <h3>No targeting rules</h3>

              <p>
                Add a user or group rule to start targeting this feature.
              </p>
            </div>
          ) : (
            <div className="groups-table-wrapper">
              <table className="targeting-table">
                <thead>
                  <tr>
                    <th>RULE</th>
                    <th>FEATURE FLAG</th>
                    <th>TYPE</th>
                    <th>TARGET</th>
                    <th>ACTION</th>
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
                          <div className="rule-icon">⚑</div>

                          <div>
                            <strong>
                              {getFlagName(rule.flag_id)}
                            </strong>

                            <span>
                              Flag ID #{rule.flag_id}
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
                            ? "User"
                            : "Group"}
                        </span>
                      </td>

                      <td>
                        <span className="target-value">
                          {rule.rule_value}
                        </span>
                      </td>

                      <td>
                        <button
                          className="action-button delete-button"
                          onClick={() => deleteRule(rule.id)}
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

export default TargetingRules;