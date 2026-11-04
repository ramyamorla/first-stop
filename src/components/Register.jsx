import React, { useState } from "react";

function Register({ onLogin }) {
  const [form, setForm] = useState({
    fullName: "",
    farmName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (form.password.length < 12) {
      alert("Use a password with at least 12 characters.");
      return;
    }

    // UI prototype only.
    // Connect to the backend registration API later.
    console.log("Registration details:", {
      ...form,
      password: "[REDACTED]",
      confirmPassword: "[REDACTED]"
    });

    alert("Registration form validated!");
  };

  return (
    <div className="auth-container">
      <h1>First Stop</h1>
      <p>Start managing your farm logistics.</p>

      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />

        <input
          name="farmName"
          placeholder="Farm / Business Name"
          value={form.farmName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={12}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Create Account
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <button type="button" onClick={onLogin}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;
