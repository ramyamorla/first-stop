import { useState } from "react";
import AuthPage from "./components/AuthPage";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("auth");

  return (
    <>
      {currentPage === "auth" && (
        <AuthPage
          onLoginSuccess={() => setCurrentPage("profile")}
        />
      )}

      {currentPage === "profile" && (
        <Profile
          onLogout={() => setCurrentPage("auth")}
        />
      )}
    </>
  );
}

export default App;
