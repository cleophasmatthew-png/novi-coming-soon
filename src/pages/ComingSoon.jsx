import logo from "../assets/logo.png";

function ComingSoon() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "system-ui",
      backgroundColor: "#ffffff",
      color: "#0f172a",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      textAlign: "center"
    }}>
      {/* Logo */}
      <img src={logo} alt="novi logo" style={{ width: "90px", marginBottom: "1rem" }} />
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>novi</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.75, marginBottom: "2rem" }}>
        Simple team management for small businesses.<br />
        Launching soon!
      </p>

      {/* Email capture */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            outline: "none",
            minWidth: "240px"
          }}
        />
        <button style={{
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#6366f1",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer"
        }}>
          Notify Me
        </button>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", fontSize: "0.85rem", color: "#64748b" }}>
        © 2026 novi | hello@noviapp.online
      </footer>
    </div>
  );
}

export default ComingSoon;
