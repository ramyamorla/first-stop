import { useState } from "react";

function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    farmName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (form.password.length < 12) {
      alert("Password must contain at least 12 characters.");
      return;
    }

    if (isLogin) {
      onLoginSuccess();
    } else {
      alert("Registration UI validated! Backend integration is pending.");
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();

    alert(
      "If an account exists for this email, password reset instructions will be sent."
    );

    setForgotPassword(false);
    setResetEmail("");
  };

  if (forgotPassword) {
    return (
      <main className="auth-page">
        <section className="brand-panel">
          <div className="brand-logo">
            <span className="logo-icon">✳</span>
            <span>first stop</span>
          </div>

          <div className="brand-content">
            <span className="eyebrow">YOUR FARM. YOUR FUTURE.</span>
            <h1>
              We're here to
              <br />
              help you get back.
            </h1>
            <p>
              Your farm logistics journey is just one step away.
              Let's get you back into your account.
            </p>
            <div className="farm-illustration">
              <div className="sun"></div>
              <div className="hill hill-one"></div>
              <div className="hill hill-two"></div>
              <div className="hill hill-three"></div>
              <div className="field-lines"></div>
            </div>
          </div>

          <div className="brand-footer">
            <span>Built for farmers. Powered by smarter logistics.</span>
            <span>Georgia, USA</span>
          </div>
        </section>

        <section className="form-panel">
          <div className="auth-form-wrapper">
            <div className="form-heading">
              <span className="eyebrow">ACCOUNT RECOVERY</span>
              <h2>Forgot password?</h2>
              <p>
                Enter your registered email address.
                We'll send instructions to reset your password.
              </p>
            </div>

            <form onSubmit={handleResetSubmit}>
              <label>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />

              <button className="submit-button" type="submit">
                Send Reset Instructions →
              </button>
            </form>

            <div className="form-bottom">
              <button onClick={() => setForgotPassword(false)}>
                ← Back to Sign In
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <section className="brand-panel">
        <div className="brand-logo">
          <span className="logo-icon">✳</span>
          <span>first stop</span>
        </div>

        <div className="brand-content">
          <span className="eyebrow">SMARTER AGRICULTURE</span>

          <h1>
            From your farm
            <br />
            to the right market.
          </h1>

          <p>
            Make smarter delivery decisions, plan your
            produce shipments, and maximize your farm's
            potential.
          </p>

          <div className="farm-illustration">
            <div className="sun"></div>
            <div className="hill hill-one"></div>
            <div className="hill hill-two"></div>
            <div className="hill hill-three"></div>
            <div className="field-lines"></div>
          </div>
        </div>

        <div className="brand-footer">
          <span>Built for farmers. Powered by smarter logistics.</span>
          <span>Georgia, USA</span>
        </div>
      </section>

      <section className="form-panel">
        <div className="mobile-logo">✳ first stop</div>

        <div className="auth-form-wrapper">
          <div className="form-heading">
            <span className="eyebrow">WELCOME TO FIRST STOP</span>

            <h2>
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>

            <p>
              {isLogin
                ? "Sign in to continue managing your farm."
                : "Let's get your farm connected."}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>

            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label>Full name</label>
                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />

                <label>Farm / Business name</label>
                <input
                  name="farmName"
                  placeholder="Your farm or business name"
                  value={form.farmName}
                  onChange={handleChange}
                  required
                />

                <label>Phone number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <label>Email address</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="password-heading">
              <label>Password</label>
              {isLogin && (
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot password?
                </button>
              )}
            </div>

            <div className="password-field">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {!isLogin && (
              <>
                <p className="password-hint">
                  Use at least 12 characters.
                </p>

                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <button className="submit-button" type="submit">
              {isLogin ? "Sign In" : "Create Account"}
              <span>→</span>
            </button>
          </form>

          <div className="form-bottom">
            {isLogin
              ? "New to First Stop? "
              : "Already have an account? "}

            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </div>

          <p className="terms">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
