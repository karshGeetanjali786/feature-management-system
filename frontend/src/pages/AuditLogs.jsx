import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const API_URL = "http://127.0.0.1:8000";

function AuditLogs() {

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
          "Failed to fetch audit logs"
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
              SYSTEM ACTIVITY
            </p>

            <h1>
              Audit Logs
            </h1>

            <p>
              Track feature flag changes and
              user activities.
            </p>

          </div>


          <div className="user-box">

            <span>
              Total Logs
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
                LOG FILTERS
              </p>

              <h2>
                Filter Audit Logs
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
                All Actions
              </option>

              <option value="CREATE_FLAG">
                CREATE_FLAG
              </option>

              <option value="UPDATE_FLAG">
                UPDATE_FLAG
              </option>

              <option value="DELETE_FLAG">
                DELETE_FLAG
              </option>

            </select>


            {/* USER */}

            <input
              type="number"
              placeholder="User ID"
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
              placeholder="Flag Key"
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
              placeholder="Environment"
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
                Date From
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
                Date To
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
              Apply Filters
            </button>


            <button
              className="secondary-button"
              onClick={clearFilters}
            >
              Clear Filters
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
                ACTIVITY HISTORY
              </p>

              <h2>
                Audit Log Records
              </h2>

            </div>


            <span className="count-badge">

              {logs.length} log
              {logs.length !== 1
                ? "s"
                : ""}

            </span>

          </div>


          {/* LOADING */}

          {loading ? (

            <p>
              Loading audit logs...
            </p>


          ) : logs.length === 0 ? (


            /* EMPTY STATE */

            <div className="empty-state">

              <h3>
                No Audit Logs Found
              </h3>

              <p>
                Try changing your filters
                or perform an activity.
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
                  minWidth: "1100px",
                }}
              >

                <thead>

                  <tr>

                    <th>ID</th>

                    <th>Action</th>

                    <th>User</th>

                    <th>Flag</th>

                    <th>Environment</th>

                    <th>Old Value</th>

                    <th>New Value</th>

                    <th>Timestamp</th>

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

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

    </div>

  );

}

export default AuditLogs;