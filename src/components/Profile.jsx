import { useState } from "react";

function Profile({ onDashboard, onLogout }) {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Farmer Name",
    farmName: "My Farm",
    email: "farmer@example.com",
    phone: "",
  });

  const [originalProfile, setOriginalProfile] = useState(profile);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setOriginalProfile(profile);
    setEditing(false);
    setSaved(true);
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setEditing(false);
    setSaved(false);
  };

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <div className="profile-brand">✳ first stop</div>

        <nav>
          <button className="nav-item" onClick={onDashboard}>
            ⌂ Dashboard
          </button>

          <button className="nav-item active">
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
            <span className="profile-eyebrow">ACCOUNT SETTINGS</span>
            <h1>My Profile</h1>
            <p>Manage your personal and farm information.</p>
          </div>

          <span className="account-badge">● Farmer Account</span>
        </header>

        <section className="profile-card">
          <div className="profile-card-heading">
            <div className="large-avatar">
              {profile.fullName.charAt(0).toUpperCase() || "F"}
            </div>

            <div>
              <h2>{profile.fullName}</h2>
              <p>{profile.farmName}</p>
            </div>
          </div>

          <div className="profile-section-heading">
            <div>
              <h3>Personal Information</h3>
              <p>Your account and contact details.</p>
            </div>

            {!editing && (
              <button
                className="edit-button"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <form onSubmit={handleSave}>
            <div className="profile-grid">
              <div className="profile-field">
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label>Farm / Business Name</label>
                <input
                  name="farmName"
                  value={profile.farmName}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {editing && (
              <div className="profile-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button type="submit" className="save-button">
                  Save Changes
                </button>
              </div>
            )}
          </form>

          {saved && (
            <p className="success-message">
              ✓ Profile changes saved in this preview.
            </p>
          )}
        </section>

        <section className="profile-card account-card">
          <h3>Account Information</h3>

          <div className="account-row">
            <span>Account type</span>
            <strong>Farmer</strong>
          </div>

          <div className="account-row">
            <span>Account status</span>
            <strong className="status-active">Active (Preview)</strong>
          </div>

          <div className="account-row">
            <span>Farm setup</span>
            <strong>Not configured yet</strong>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
