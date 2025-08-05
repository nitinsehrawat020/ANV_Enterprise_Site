// Ultra-simple test component to debug white screen
function UltraSimpleNotFound() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "red",
        color: "white",
        fontSize: "24px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>TEST: 404 Page</h1>
        <p>If you can see this RED page, the component is rendering!</p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "red",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default UltraSimpleNotFound;
