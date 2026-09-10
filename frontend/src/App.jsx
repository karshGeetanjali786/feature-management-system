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

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/environments"
        element={<Environments />}
      />

      <Route
        path="/feature-flags"
        element={<FeatureFlags />}
      />

      <Route
        path="/overrides"
        element={<Overrides />}
      />

      <Route
        path="/groups"
        element={<Groups />}
      />

      <Route
        path="/groups/:groupId/members"
        element={<GroupMembers />}
      />

      <Route
        path="/targeting-rules"
        element={<TargetingRules />}
      />

      <Route
        path="/evaluation-tester"
        element={<EvaluationTester />}
      />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;