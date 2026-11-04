import React, { useState } from "react";

function Login({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // UI prototype only.
    // Authentication will be connected to the backend.
    console.log("Login requested:", {
      email,
      remember
    });

    alert("Login interface is ready for backend integration!");
  };

  return (
    <div className="auth-container">
      <h1>First Stop</h1>
      <p>Welcome back!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <button type="button" onClick={onRegister}>
          Create Account
        </button>
      </p>
    </div>
  );
}

export default Login;
