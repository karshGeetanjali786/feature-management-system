import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const navigate = useNavigate();

  const email = localStorage.getItem("user_email") || "User";
  const token = localStorage.getItem("access_token");

  
  // DASHBOARD METRICS
  const [totalFlags, setTotalFlags] = useState(0);
  const [activeFlags, setActiveFlags] = useState(0);
  const [totalEnvironments, setTotalEnvironments] = useState(0);
  const [totalOverrides, setTotalOverrides] = useState(0);

  // SUMMARY METRICS
  const [todaysEvaluations, setTodaysEvaluations] = useState(0);
  const [auditLogsToday, setAuditLogsToday] = useState(0);

  // EVALUATION ANALYTICS
  const [analytics, setAnalytics] = useState({
    total_evaluations: 0,
    hourly: [],
    by_flag: [],
  });

  // ENVIRONMENT USAGE
  const [environmentUsage, setEnvironmentUsage] = useState([]);

  // RECENT AUDIT LOGS
  const [recentLogs, setRecentLogs] = useState([]);

  // LOADING STATES
  const [loading, setLoading] = useState(true);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);
  const [usageLoading, setUsageLoading] = useState(true);
  const [logsLoading, setLogsLoading] = useState(true);

  // FETCH DASHBOARD DATA
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [
          flagsResponse,
          environmentsResponse,
          overridesResponse,
          analyticsResponse,
          usageResponse,
          logsResponse,
          allLogsResponse,
        ] = await Promise.all([
          // FEATURE FLAGS
          fetch(
            "http://127.0.0.1:8000/feature-flags/",
            {
              headers,
            }
          ),

          // ENVIRONMENTS
          fetch(
            "http://127.0.0.1:8000/environments/",
            {
              headers,
            }
          ),

          // ENVIRONMENT OVERRIDES
          fetch(
            "http://127.0.0.1:8000/environment-overrides/",
            {
              headers,
            }
          ),

          // EVALUATION ANALYTICS
          fetch(
            "http://127.0.0.1:8000/analytics/evaluations",
            {
              headers,
            }
          ),

          // ENVIRONMENT USAGE
          fetch(
            "http://127.0.0.1:8000/analytics/usage",
            {
              headers,
            }
          ),

          // RECENT AUDIT LOGS
          fetch(
            "http://127.0.0.1:8000/audit-logs/recent",
            {
              headers,
            }
          ),

          // ALL AUDIT LOGS
          fetch(
            "http://127.0.0.1:8000/audit-logs/",
            {
              headers,
            }
          ),
        ]);

        
        // FEATURE FLAGS

        if (flagsResponse.ok) {
          const flags = await flagsResponse.json();

          setTotalFlags(flags.length);

          const active = flags.filter(
            (flag) => flag.enabled === true
          ).length;

          setActiveFlags(active);
        } else {
          console.error(
            "Failed to fetch feature flags:",
            flagsResponse.status
          );
        }

        // ENVIRONMENTS

        if (environmentsResponse.ok) {
          const environments =
            await environmentsResponse.json();

          setTotalEnvironments(
            environments.length
          );
        } else {
          console.error(
            "Failed to fetch environments:",
            environmentsResponse.status
          );
        }

        // OVERRIDES

        if (overridesResponse.ok) {
          const overrides =
            await overridesResponse.json();

          setTotalOverrides(
            overrides.length
          );
        } else {
          console.error(
            "Failed to fetch overrides:",
            overridesResponse.status
          );
        }

        // EVALUATION ANALYTICS

        if (analyticsResponse.ok) {
          const analyticsData =
            await analyticsResponse.json();

          setAnalytics(analyticsData);

          // Calculate today's evaluations
          const today = new Date()
            .toISOString()
            .split("T")[0];

          const todayEvaluations =
            analyticsData.hourly
              .filter(
                (item) => item.date === today
              )
              .reduce(
                (total, item) =>
                  total + item.evaluations,
                0
              );

          setTodaysEvaluations(
            todayEvaluations
          );
        } else {
          console.error(
            "Failed to fetch analytics:",
            analyticsResponse.status
          );
        }

        // ENVIRONMENT USAGE
    
        if (usageResponse.ok) {
          const usageData =
            await usageResponse.json();

          setEnvironmentUsage(
            usageData.usage || []
          );
        } else {
          console.error(
            "Failed to fetch environment usage:",
            usageResponse.status
          );
        }

        // RECENT AUDIT LOGS

        if (logsResponse.ok) {
          const logsData =
            await logsResponse.json();

          setRecentLogs(logsData);
        } else {
          console.error(
            "Failed to fetch recent audit logs:",
            logsResponse.status
          );
        }

        // AUDIT LOGS TODAY

        if (allLogsResponse.ok) {
          const allLogs =
            await allLogsResponse.json();

          const today = new Date()
            .toISOString()
            .split("T")[0];

          const todayLogs = allLogs.filter(
            (log) => {
              if (!log.timestamp) {
                return false;
              }

              const logDate = new Date(
                log.timestamp
              )
                .toISOString()
                .split("T")[0];

              return logDate === today;
            }
          );

          setAuditLogsToday(
            todayLogs.length
          );
        } else {
          console.error(
            "Failed to fetch audit logs:",
            allLogsResponse.status
          );
        }
      } catch (error) {
        console.error(
          "Dashboard data fetch failed:",
          error
        );
      } finally {
        setLoading(false);
        setAnalyticsLoading(false);
        setUsageLoading(false);
        setLogsLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  return (
    <div className="dashboard-page">

      <Sidebar />

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              RELEASE CONTROL HUB
            </p>

            <h1>
              Feature Management Console
            </h1>

            <p>
              Manage feature flags, environments and
              configuration from one place.
            </p>

          </div>

          <div className="user-box">

            <span>
              Signed in as
            </span>

            <strong>
              {email}
            </strong>

          </div>

        </header>


        {/* METRICS */}

        <section className="metrics-grid">

          {/* TOTAL FLAGS */}

          <div className="metric-card">

            <span>◈</span>

            <p>
              Total Feature Flags
            </p>

            <h2>
              {loading
                ? "..."
                : totalFlags}
            </h2>

          </div>


          {/* ACTIVE FLAGS */}

          <div className="metric-card">

            <span>✓</span>

            <p>
              Active Flags
            </p>

            <h2>
              {loading
                ? "..."
                : activeFlags}
            </h2>

          </div>


          {/* ENVIRONMENTS */}

          <div className="metric-card">

            <span>▣</span>

            <p>
              Environments
            </p>

            <h2>
              {loading
                ? "..."
                : totalEnvironments}
            </h2>

          </div>


          {/* OVERRIDES */}

          <div className="metric-card">

            <span>⚙</span>

            <p>
              Overrides
            </p>

            <h2>
              {loading
                ? "..."
                : totalOverrides}
            </h2>

          </div>


          {/* TODAY'S EVALUATIONS */}

          <div className="metric-card">

            <span>◉</span>

            <p>
              Today's Evaluations
            </p>

            <h2>
              {analyticsLoading
                ? "..."
                : todaysEvaluations}
            </h2>

          </div>


          {/* AUDIT LOGS TODAY */}

          <div className="metric-card">

            <span>▤</span>

            <p>
              Audit Logs Today
            </p>

            <h2>
              {logsLoading
                ? "..."
                : auditLogsToday}
            </h2>

          </div>

        </section>


        {/* EVALUATION ANALYTICS */}

        <section className="analytics-card">

          <div className="analytics-header">

            <div>

              <p className="eyebrow">
                EVALUATION ANALYTICS
              </p>

              <h2>
                Feature Flag Evaluations
              </h2>

              <p>
                Evaluation activity during the last
                24 hours.
              </p>

            </div>


            <div className="analytics-summary">

              <span>
                Total Evaluations
              </span>

              <strong>
                {analyticsLoading
                  ? "..."
                  : analytics.total_evaluations}
              </strong>

            </div>

          </div>


          {/* HOURLY CHART */}

          <div className="analytics-chart">

            {analyticsLoading ? (

              <div className="analytics-empty">
                Loading analytics...
              </div>

            ) : analytics.hourly.length === 0 ? (

              <div className="analytics-empty">
                No evaluation data available yet.
              </div>

            ) : (

              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <LineChart
                  data={analytics.hourly}
                  margin={{
                    top: 10,
                    right: 20,
                    left: 0,
                    bottom: 10,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    opacity={0.2}
                  />

                  <XAxis
                    dataKey="hour"
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <YAxis
                    allowDecimals={false}
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <Tooltip
                    formatter={(value) => [
                      value,
                      "Evaluations",
                    ]}
                    labelFormatter={(label) =>
                      `Time: ${label}`
                    }
                  />

                  <Line
                    type="monotone"
                    dataKey="evaluations"
                    stroke="#7c5cff"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />

                </LineChart>

              </ResponsiveContainer>

            )}

          </div>


          {/* EVALUATIONS BY FLAG */}

          <div className="flag-analytics-section">

            <div className="flag-analytics-title">

              <div>

                <p className="eyebrow">
                  FLAG ANALYTICS
                </p>

                <h3>
                  Evaluations by Feature Flag
                </h3>

                <p>
                  Evaluation count for each feature
                  flag during the last 24 hours.
                </p>

              </div>

            </div>


            {analyticsLoading ? (

              <div className="analytics-empty small">
                Loading flag analytics...
              </div>

            ) : analytics.by_flag.length === 0 ? (

              <div className="analytics-empty small">
                No feature flag analytics available.
              </div>

            ) : (

              <div className="flag-analytics-list">

                {analytics.by_flag.map(
                  (flag) => {

                    const percentage =
                      analytics.total_evaluations > 0
                        ? (
                            (flag.evaluations /
                              analytics.total_evaluations) *
                            100
                          ).toFixed(1)
                        : 0;

                    return (

                      <div
                        className="flag-analytics-row"
                        key={flag.flag_key}
                      >

                        <div className="flag-analytics-info">

                          <strong>
                            {flag.flag_key}
                          </strong>

                          <span>
                            {flag.evaluations} evaluation
                            {flag.evaluations !== 1
                              ? "s"
                              : ""}
                          </span>

                        </div>


                        <div className="flag-analytics-bar-container">

                          <div
                            className="flag-analytics-bar"
                            style={{
                              width: `${percentage}%`,
                            }}
                          />

                        </div>


                        <div className="flag-analytics-percentage">

                          {percentage}%

                        </div>

                      </div>

                    );
                  }
                )}

              </div>

            )}

          </div>

        </section>


        {/* ENVIRONMENT USAGE */}

        <section className="analytics-card">

          <div className="analytics-header">

            <div>

              <p className="eyebrow">
                ENVIRONMENT ANALYTICS
              </p>

              <h2>
                Environment Usage
              </h2>

              <p>
                Feature flag evaluation usage across
                environments during the last 24 hours.
              </p>

            </div>

          </div>


          <div className="analytics-chart">

            {usageLoading ? (

              <div className="analytics-empty">
                Loading environment usage...
              </div>

            ) : environmentUsage.length === 0 ? (

              <div className="analytics-empty">
                No environment usage data available.
              </div>

            ) : (

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart
                  data={environmentUsage}
                  margin={{
                    top: 10,
                    right: 20,
                    left: 0,
                    bottom: 10,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    opacity={0.2}
                  />

                  <XAxis
                    dataKey="environment"
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <YAxis
                    allowDecimals={false}
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <Tooltip
                    formatter={(value) => [
                      value,
                      "Evaluations",
                    ]}
                  />

                  <Bar
                    dataKey="evaluations"
                    fill="#7c5cff"
                    radius={[6, 6, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            )}

          </div>


          {/* ENVIRONMENT SUMMARY */}

          <div className="flag-analytics-list">

            {environmentUsage.map(
              (item) => (

                <div
                  className="flag-analytics-row"
                  key={item.environment}
                >

                  <div className="flag-analytics-info">

                    <strong>
                      {item.environment}
                    </strong>

                    <span>
                      {item.evaluations} evaluation
                      {item.evaluations !== 1
                        ? "s"
                        : ""}
                    </span>

                  </div>

                  <div />

                  <div className="flag-analytics-percentage">
                    {item.evaluations}
                  </div>

                </div>

              )
            )}

          </div>

        </section>


        {/* RECENT AUDIT ACTIVITY */}

        <section className="audit-dashboard-card">

          <div className="audit-dashboard-header">

            <div>

              <p className="eyebrow">
                AUDIT ACTIVITY
              </p>

              <h2>
                Recent Audit Logs
              </h2>

              <p>
                Latest changes made in the feature
                management system.
              </p>

            </div>


            <button
              className="secondary-button"
              onClick={() =>
                navigate("/audit-logs")
              }
            >
              View All
            </button>

          </div>


          <div className="audit-list">

            {logsLoading ? (

              <div className="audit-empty">
                Loading audit logs...
              </div>

            ) : recentLogs.length === 0 ? (

              <div className="audit-empty">
                No audit activity available.
              </div>

            ) : (

              recentLogs.map(
                (log) => (

                  <div
                    className="audit-row"
                    key={log.id}
                  >

                    <div className="audit-action">

                      <span className="audit-dot" />

                      <strong>
                        {log.action}
                      </strong>

                    </div>


                    <div className="audit-info">

                      <span>
                        Actor: User #{log.performed_by}
                      </span>

                      <span>
                        {log.environment
                          ? `Environment: ${log.environment}`
                          : "Environment: —"}
                      </span>

                    </div>


                    <div className="audit-time">

                      {log.timestamp
                        ? new Date(
                            log.timestamp
                          ).toLocaleString()
                        : "—"}

                    </div>

                  </div>

                )
              )

            )}

          </div>

        </section>


        {/* =========================
            WELCOME
        ========================= */}

        <section className="welcome-card">

          <p className="eyebrow">
            WELCOME
          </p>

          <h2>
            You're inside the Feature Management System.
          </h2>

          <p>
            Manage feature flags, environments, targeting
            rules, rollouts and evaluation controls from
            the dashboard.
          </p>

          <button
            className="primary-button dashboard-button"
            onClick={() =>
              navigate("/feature-flags")
            }
          >
            Manage Feature Flags
          </button>

        </section>

      </main>

    </div>
  );
}

export default Home;