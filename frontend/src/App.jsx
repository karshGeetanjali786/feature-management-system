import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import FeatureFlags from "./pages/FeatureFlags";
import EvaluationTester from "./pages/EvaluationTester";

import Groups from "./pages/Groups";
import GroupMembers from "./pages/GroupMembers";
import TargetingRules from "./pages/TargetingRules";

import Environments from "./pages/Environments";
import Overrides from "./pages/Overrides";
import AuditLogs from "./pages/AuditLogs";


// Admin-only route protection
function AdminRoute({ children }) {
  const token = localStorage.getItem("access_token");
  const role = localStorage.getItem("user_role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
}


// Logged-in user route protection
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {
  return (
    <Routes>

      {/* Default route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />


      {/* Public routes */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />


      {/* Logged-in users - Admin + Normal User */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/feature-flags"
        element={
          <ProtectedRoute>
            <FeatureFlags />
          </ProtectedRoute>
        }
      />

      <Route
        path="/environments"
        element={
          <ProtectedRoute>
            <Environments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/evaluation-tester"
        element={
          <ProtectedRoute>
            <EvaluationTester />
          </ProtectedRoute>
        }
      />

      <Route
        path="/groups"
        element={
          <ProtectedRoute>
            <Groups />
          </ProtectedRoute>
        }
      />

      <Route
        path="/groups/:groupId/members"
        element={
          <ProtectedRoute>
            <GroupMembers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/targeting-rules"
        element={
          <ProtectedRoute>
            <TargetingRules />
          </ProtectedRoute>
        }
      />

      <Route
        path="/overrides"
        element={
          <ProtectedRoute>
            <Overrides />
          </ProtectedRoute>
        }
      />


      {/* Audit Logs - Admin only */}
      <Route
        path="/audit-logs"
        element={
          <AdminRoute>
            <AuditLogs />
          </AdminRoute>
        }
      />


      {/* Unknown route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;