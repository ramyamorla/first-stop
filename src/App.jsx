import { useState } from "react";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("auth");

  return (
    <>
      {currentPage === "auth" && (
        <AuthPage
          onLoginSuccess={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard
          onProfile={() => setCurrentPage("profile")}
          onLogout={() => setCurrentPage("auth")}
        />
      )}

      {currentPage === "profile" && (
        <Profile
          onDashboard={() => setCurrentPage("dashboard")}
          onLogout={() => setCurrentPage("auth")}
        />
      )}
    </>
  );
}

export default App;
