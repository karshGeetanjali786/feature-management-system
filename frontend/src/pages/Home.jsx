import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

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

  // // LANGUAGE CHANGE
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

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
              {t("releaseControlHub")}
            </p>

            <h1>
              {t("featureManagementConsole")}
            </h1>

            <p>
              {t("dashboardDescription")}
            </p>

          </div>

          <div
            className="user-box"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >

            <div>
              <span>
                {t("signedInAs")}
              </span>

              <strong>
                {email}
              </strong>
            </div>

            

          </div>

        </header>


        {/* METRICS */}
        <section className="metrics-grid">

          {/* TOTAL FLAGS */}
          <div className="metric-card">

            <span>◈</span>

            <p>
              {t("totalFeatureFlags")}
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
              {t("activeFlags")}
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
              {t("environmentsCount")}
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
              {t("overridesCount")}
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
              {t("todaysEvaluations")}
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
              {t("auditLogsToday")}
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
                {t("evaluationAnalytics")}
              </p>

              <h2>
                {t("featureFlagEvaluations")}
              </h2>

              <p>
                {t("evaluationActivity")}
              </p>

            </div>


            <div className="analytics-summary">

              <span>
                {t("totalEvaluations")}
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
                {t("loadingAnalytics")}
              </div>

            ) : analytics.hourly.length === 0 ? (

              <div className="analytics-empty">
                {t("noEvaluationData")}
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
                      t("evaluations"),
                    ]}
                    labelFormatter={(label) =>
                      `${t("time")}: ${label}`
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
                  {t("flagAnalytics")}
                </p>

                <h3>
                  {t("evaluationsByFeatureFlag")}
                </h3>

                <p>
                  {t("flagEvaluationDescription")}
                </p>

              </div>

            </div>


            {analyticsLoading ? (

              <div className="analytics-empty small">
                {t("loadingFlagAnalytics")}
              </div>

            ) : analytics.by_flag.length === 0 ? (

              <div className="analytics-empty small">
                {t("noFlagAnalytics")}
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
                            {flag.evaluations}{" "}
                            {flag.evaluations !== 1
                              ? t("evaluationsPlural")
                              : t("evaluation")}
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
                {t("environmentAnalytics")}
              </p>

              <h2>
                {t("environmentUsage")}
              </h2>

              <p>
                {t("environmentUsageDescription")}
              </p>

            </div>

          </div>


          <div className="analytics-chart">

            {usageLoading ? (

              <div className="analytics-empty">
                {t("loadingEnvironmentUsage")}
              </div>

            ) : environmentUsage.length === 0 ? (

              <div className="analytics-empty">
                {t("noEnvironmentUsage")}
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
                      t("evaluations"),
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
                      {item.evaluations}{" "}
                      {item.evaluations !== 1
                        ? t("evaluationsPlural")
                        : t("evaluation")}
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
                {t("auditActivity")}
              </p>

              <h2>
                {t("recentAuditLogs")}
              </h2>

              <p>
                {t("latestChanges")}
              </p>

            </div>


            <button
              className="secondary-button"
              onClick={() =>
                navigate("/audit-logs")
              }
            >
              {t("viewAll")}
            </button>

          </div>


          <div className="audit-list">

            {logsLoading ? (

              <div className="audit-empty">
                {t("loadingAuditLogs")}
              </div>

            ) : recentLogs.length === 0 ? (

              <div className="audit-empty">
                {t("noAuditActivity")}
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
                        {t("actor")}: User #{log.performed_by}
                      </span>

                      <span>
                        {log.environment
                          ? `${t("environment")}: ${log.environment}`
                          : `${t("environment")}: —`}
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


        {/* WELCOME */}
        <section className="welcome-card">

          <p className="eyebrow">
            {t("welcome")}
          </p>

          <h2>
            {t("welcomeTitle")}
          </h2>

          <p>
            {t("welcomeDescription")}
          </p>

          <button
            className="primary-button dashboard-button"
            onClick={() =>
              navigate("/feature-flags")
            }
          >
            {t("manageFeatureFlags")}
          </button>

        </section>

      </main>

    </div>
  );
}

export default Home;