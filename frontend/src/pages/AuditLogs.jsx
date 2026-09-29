import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function AuditLogs() {
  const { t } = useTranslation();
  const [logs, setLogs] = useState([]);

  // FILTER STATES
  const [action, setAction] = useState("");
  const [performedBy, setPerformedBy] = useState("");
  const [flagKey, setFlagKey] = useState("");
  const [environment, setEnvironment] = useState("");

  // DATE RANGE
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // UI STATES
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // AUDIT LOG DETAILS
  const [selectedLog, setSelectedLog] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);


  // FETCH AUDIT LOGS
  const fetchLogs = async () => {

    try {

      setLoading(true);
      setError("");

      const token =
        localStorage.getItem("access_token");

      const params =
        new URLSearchParams();

      // Existing filters
      if (action) {
        params.append("action", action);
      }

      if (performedBy) {
        params.append(
          "performed_by",
          performedBy
        );
      }

      if (flagKey) {
        params.append(
          "flag_key",
          flagKey
        );
      }

      if (environment) {
        params.append(
          "environment",
          environment
        );
      }

      // DATE RANGE FILTERS
      if (dateFrom) {
        params.append(
          "date_from",
          dateFrom
        );
      }

      if (dateTo) {
        params.append(
          "date_to",
          dateTo
        );
      }


      const response = await fetch(
        `${API_URL}/audit-logs/?${params.toString()}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );


      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          data.detail ||
          t("failedToFetchAuditLogs") 
        );

      }


      setLogs(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };


  // INITIAL LOAD
  useEffect(() => {

    fetchLogs();

  }, []);


  // VIEW AUDIT LOG DETAILS
  const viewLogDetails = async (logId) => {

    try {

      setDetailsLoading(true);
      setError("");

      const token =
        localStorage.getItem("access_token");

      const response = await fetch(
        `${API_URL}/audit-logs/${logId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        throw new Error(
          data.detail ||
          t("failedToFetchAuditLogDetails")
        );

      }

      setSelectedLog(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setDetailsLoading(false);

    }

  };


  // CLOSE DETAILS
  const closeDetails = () => {

    setSelectedLog(null);

  };


  // CLEAR FILTERS
  const clearFilters = () => {

    setAction("");
    setPerformedBy("");
    setFlagKey("");
    setEnvironment("");

    // Clear date filters
    setDateFrom("");
    setDateTo("");

    setTimeout(() => {

      fetchLogs();

    }, 0);

  };


  // FORMAT DATE
  const formatDate = (timestamp) => {

    if (!timestamp) {
      return "-";
    }

    return new Date(
      timestamp
    ).toLocaleString();

  };


  // EXTRACT FLAG KEY
  const getFlagKey = (log) => {

    const source =
      log.new_value ||
      log.old_value ||
      "";


    const match = source.match(
      /['"]key['"]\s*:\s*['"]([^'"]+)['"]/
    );


    return match
      ? match[1]
      : "-";

  };


  // FORMAT OLD / NEW STATE
  const formatState = (value) => {

    if (!value) {
      return "-";
    }

    try {

      const parsed =
        JSON.parse(value);

      return JSON.stringify(
        parsed,
        null,
        2
      );

    } catch {

      return value;

    }

  };


  // RENDER
  return (

    <div className="dashboard-page">

      <Sidebar />


      {/* MAIN CONTENT */}

      <main className="dashboard-main">


        {/* HEADER */}

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              {t("systemActivity")}
            </p>

            <h1>
              {t("auditLogs")}
            </h1>

            <p>
              {t("auditLogsDescription")}
            </p>

          </div>


          <div className="user-box">

            <span>
              {t("totalLogs")}
            </span>

            <strong>
              {logs.length}
            </strong>

          </div>

        </header>


        {/* FILTER SECTION */}

        <section className="card">


          <div className="section-heading">

            <div>

              <p className="eyebrow">
                {t("logFilters")}
              </p>

              <h2>
                {t("filterAuditLogs")}
              </h2>

            </div>

          </div>


          {/* FILTER INPUTS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4, 1fr)",
              gap: "14px",
              marginTop: "20px",
            }}
          >


            {/* ACTION */}

            <select
              value={action}
              onChange={(e) =>
                setAction(
                  e.target.value
                )
              }
            >

              <option value="">
                {t("allActions")}
              </option>

              {/* FEATURE FLAG ACTIONS */}

              <option value="CREATE_FLAG">
                CREATE_FLAG
              </option>

              <option value="UPDATE_FLAG">
                UPDATE_FLAG
              </option>

              <option value="DELETE_FLAG">
                DELETE_FLAG
              </option>

              <option value="ENABLE_FLAG">
                ENABLE_FLAG
              </option>

              <option value="DISABLE_FLAG">
                DISABLE_FLAG
              </option>

              <option value="ROLLOUT_CHANGED">
                ROLLOUT_CHANGED
              </option>


              {/* TARGETING ACTIONS */}

              <option value="USER_TARGET_ADDED">
                USER_TARGET_ADDED
              </option>

              <option value="USER_TARGET_REMOVED">
                USER_TARGET_REMOVED
              </option>

              <option value="GROUP_TARGET_ADDED">
                GROUP_TARGET_ADDED
              </option>

              <option value="GROUP_TARGET_REMOVED">
                GROUP_TARGET_REMOVED
              </option>


              {/* ENVIRONMENT OVERRIDE ACTIONS */}

              <option value="CREATE_ENVIRONMENT_OVERRIDE">
                CREATE_ENVIRONMENT_OVERRIDE
              </option>

              <option value="OVERRIDE_CHANGED">
                OVERRIDE_CHANGED
              </option>

              <option value="DELETE_ENVIRONMENT_OVERRIDE">
                DELETE_ENVIRONMENT_OVERRIDE
              </option>

            </select>


            {/* USER */}

            <input
              type="number"
              placeholder={t("userId")}
              value={performedBy}
              onChange={(e) =>
                setPerformedBy(
                  e.target.value
                )
              }
            />


            {/* FLAG */}

            <input
              type="text"
              placeholder={t("flagKey")}
              value={flagKey}
              onChange={(e) =>
                setFlagKey(
                  e.target.value
                )
              }
            />


            {/* ENVIRONMENT */}

            <input
              type="text"
              placeholder={t("environment")}
              value={environment}
              onChange={(e) =>
                setEnvironment(
                  e.target.value
                )
              }
            />

          </div>


          {/* DATE RANGE */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, 1fr)",
              gap: "14px",
              marginTop: "14px",
            }}
          >

            {/* DATE FROM */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                }}
              >
                {t("dateFrom")}
              </label>

              <input
                type="date"
                value={dateFrom}
                onChange={(e) =>
                  setDateFrom(
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                }}
              />

            </div>


            {/* DATE TO */}

            <div>

              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                }}
              >
                {t("dateTo")}
              </label>

              <input
                type="date"
                value={dateTo}
                onChange={(e) =>
                  setDateTo(
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                }}
              />

            </div>

          </div>


          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "18px",
            }}
          >

            <button
              className="primary-button"
              onClick={fetchLogs}
            >
              {t("applyFilters")}
            </button>


            <button
              className="secondary-button"
              onClick={clearFilters}
            >
              {t("clearFilters")}
            </button>

          </div>

        </section>


        {/* ERROR */}

        {error && (

          <div
            className="status-message error-message"
          >
            {error}
          </div>

        )}


        {/* LOG TABLE */}

        <section className="groups-section">


          <div className="section-heading">

            <div>

              <p className="eyebrow">
                {t("activityHistory")}
              </p>

              <h2>
                Audit Log Records
              </h2>

            </div>


            <span className="count-badge">

              {logs.length}{" "}
              {logs.length !== 1
                ? t("logs")
                : t("log")}

            </span>

          </div>


          {/* LOADING */}

          {loading ? (

            <p>
              {t("loadingAuditLogs")}
            </p>


          ) : logs.length === 0 ? (


            /* EMPTY STATE */

            <div className="empty-state">

              <h3>
                {t("noAuditLogsFound")}
              </h3>

              <p>
                {t("noAuditLogsDescription")}
              </p>

            </div>


          ) : (


            /* TABLE */

            <div
              style={{
                overflowX: "auto",
                width: "100%",
              }}
            >

              <table
                style={{
                  width: "100%",
                  borderCollapse:
                    "collapse",
                  minWidth: "1200px",
                }}
              >

                <thead>

                  <tr>

                    <th>{t("id")}</th>
                    <th>{t("action")}</th>
                    <th>{t("user")}</th>
                    <th>{t("flag")}</th>
                    <th>{t("environment")}</th>
                    <th>{t("oldValue")}</th>
                    <th>{t("newValue")}</th>
                    <th>{t("timestamp")}</th>
                    <th>{t("details")}</th>

                  </tr>

                </thead>


                <tbody>

                  {logs.map(
                    (log) => (

                      <tr
                        key={log.id}
                      >

                        <td>
                          {log.id}
                        </td>


                        <td>

                          <strong>
                            {log.action}
                          </strong>

                        </td>


                        <td>
                          {log.performed_by ??
                            "-"}
                        </td>


                        <td>
                          {getFlagKey(
                            log
                          )}
                        </td>


                        <td>
                          {log.environment ??
                            "-"}
                        </td>


                        <td>

                          <div
                            style={{
                              maxWidth:
                                "250px",
                              maxHeight:
                                "100px",
                              overflowY:
                                "auto",
                              whiteSpace:
                                "pre-wrap",
                              wordBreak:
                                "break-word",
                              fontSize:
                                "12px",
                            }}
                          >

                            {log.old_value ||
                              "-"}

                          </div>

                        </td>


                        <td>

                          <div
                            style={{
                              maxWidth:
                                "250px",
                              maxHeight:
                                "100px",
                              overflowY:
                                "auto",
                              whiteSpace:
                                "pre-wrap",
                              wordBreak:
                                "break-word",
                              fontSize:
                                "12px",
                            }}
                          >

                            {log.new_value ||
                              "-"}

                          </div>

                        </td>


                        <td>

                          {formatDate(
                            log.timestamp
                          )}

                        </td>


                        {/* DETAILS BUTTON */}

                        <td>

                          <button
                            className="secondary-button"
                            onClick={() =>
                              viewLogDetails(
                                log.id
                              )
                            }
                            disabled={
                              detailsLoading
                            }
                            style={{
                              whiteSpace:
                                "nowrap",
                              fontSize:
                                "12px",
                              padding:
                                "8px 12px",
                            }}
                          >

                            {detailsLoading
                              ? t("loading")
                              : t("viewDetails")}

                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>


        {/* AUDIT LOG DETAILS */}

        {selectedLog && (

          <section
            className="card"
            style={{
              marginTop: "24px",
            }}
          >

            <div
              className="section-heading"
              style={{
                marginBottom: "20px",
              }}
            >

              <div>

                <p className="eyebrow">
                  {t("logDetails")}
                </p>

                <h2>
                  {t("auditLogNumber")} #{selectedLog.id}
                </h2>

              </div>


              <button
                className="secondary-button"
                onClick={closeDetails}
              >
                {t("close")}
              </button>

            </div>


            {/* BASIC DETAILS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, 1fr)",
                gap: "16px",
              }}
            >


              {/* ACTION */}

              <div>

                <strong>
                  {t("action")}
                </strong>

                <p>
                  {selectedLog.action ||
                    "-"}
                </p>

              </div>


              {/* USER */}

              <div>

                <strong>
                  {t("user")}
                </strong>

                <p>
                  {selectedLog.performed_by ??
                    "-"}
                </p>

              </div>


              {/* FLAG ID */}

              <div>

                <strong>
                  {t("flagId")}
                </strong>

                <p>
                  {selectedLog.flag_id ??
                    "-"}
                </p>

              </div>


              {/* ENVIRONMENT ID */}

              <div>

                <strong>
                  {t("environmentId")}
                </strong>

                <p>
                  {selectedLog.environment_id ??
                    "-"}
                </p>

              </div>


              {/* ENVIRONMENT */}

              <div>

                <strong>
                  {t("environment")}
                </strong>

                <p>
                  {selectedLog.environment ||
                    "-"}
                </p>

              </div>


              {/* TIME */}

              <div>

                <strong>
                  {t("time")}
                </strong>

                <p>
                  {formatDate(
                    selectedLog.timestamp
                  )}
                </p>

              </div>

            </div>


            {/* OLD STATE */}

            <div
              style={{
                marginTop: "24px",
              }}
            >

              <strong>
                {t("oldState")}
              </strong>

              <pre
                style={{
                  marginTop: "8px",
                  padding: "14px",
                  background:
                    "#f7f7f7",
                  borderRadius:
                    "8px",
                  whiteSpace:
                    "pre-wrap",
                  wordBreak:
                    "break-word",
                  fontSize:
                    "13px",
                  maxHeight:
                    "250px",
                  overflowY:
                    "auto",
                  color: "#111",
                }}
              >
                {formatState(
                  selectedLog.old_value
                )}
              </pre>

            </div>


            {/* NEW STATE */}

            <div
              style={{
                marginTop: "20px",
              }}
            >

              <strong>
                {t("newState")}
              </strong>

              <pre
                style={{
                  marginTop: "8px",
                  padding: "14px",
                  background:
                    "#f7f7f7",
                  borderRadius:
                    "8px",
                  whiteSpace:
                    "pre-wrap",
                  wordBreak:
                    "break-word",
                  fontSize:
                    "13px",
                  maxHeight:
                    "250px",
                  overflowY:
                    "auto",
                  color: "#111",
                }}
              >
                {formatState(
                  selectedLog.new_value
                )}
              </pre>

            </div>


            {/* CLOSE BUTTON */}

            <div
              style={{
                marginTop: "20px",
              }}
            >

              <button
                className="secondary-button"
                onClick={closeDetails}
              >
                {t("closeDetails")}
              </button>

            </div>

          </section>

        )}

      </main>

    </div>

  );

}

export default AuditLogs;