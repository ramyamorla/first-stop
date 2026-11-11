function Dashboard({ onProfile, onLogout }) {
  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <div className="profile-brand">✳ first stop</div>

        <nav>
          <button className="nav-item active">⌂ Dashboard</button>

          <button className="nav-item" onClick={onProfile}>
            ◉ My Profile
          </button>

          <div className="nav-item">▦ My Farms</div>
          <div className="nav-item">♧ My Products</div>
          <div className="nav-item">⇄ Shipments</div>
          <div className="nav-item">⚙ Settings</div>
        </nav>

        <button className="logout-button" onClick={onLogout}>
          ↪ Logout
        </button>
      </aside>

      <main className="profile-main">
        <header className="profile-header">
          <div>
            <span className="profile-eyebrow">FARMER DASHBOARD</span>
            <h1>Dashboard</h1>
            <p>Your farm overview will be connected here next.</p>
          </div>
          <span className="account-badge">● Farmer Account</span>
        </header>
      </main>
    </div>
  );
}

export default Dashboard;
