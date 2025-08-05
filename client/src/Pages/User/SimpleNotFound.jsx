// Simple NotFound component with no CSS variables to avoid white screen
function SimpleNotFound() {
  const containerStyle = {
    minHeight: "calc(100vh - 200px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  };

  const contentStyle = {
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    background: "#ffffff",
    padding: "3rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "0 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1
          style={{
            fontSize: "8rem",
            color: "#007bff",
            margin: "0",
            lineHeight: "0.8",
          }}
        >
          404
        </h1>
        <h2 style={{ color: "#333", marginBottom: "1rem" }}>
          🏗️ Page Not Found
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. It might have been deleted, renamed, or you entered the wrong
          URL.
          <br />
          <br />
          Don&apos;t worry - let&apos;s get you back to exploring our
          construction designs and services!
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <button
            style={buttonStyle}
            onClick={() => (window.location.href = "/")}
          >
            🏠 Go to Home
          </button>
          <button
            style={{ ...buttonStyle, background: "#6c757d" }}
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

        <div
          style={{
            textAlign: "left",
            background: "#f8f9fa",
            borderRadius: "8px",
            padding: "1.5rem",
            border: "1px solid #dee2e6",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "1rem" }}>
            📍 Popular Pages
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
                🏠 Home - Browse our construction designs
              </a>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <a
                href="/design/false-ceil"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                🎨 False Ceiling Designs
              </a>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <a
                href="/design/molding"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                🏗️ Molding Designs
              </a>
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <a
                href="/aboutUs"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                ℹ️ About Us - Learn about ANV Enterprise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SimpleNotFound;
