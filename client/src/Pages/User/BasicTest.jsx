// Basic test to see if app loads at all
function BasicTest() {
  console.log("🟢 BasicTest component is rendering!");

  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "20px",
        fontSize: "20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>✅ APP IS WORKING!</h1>
        <p>If you see this GREEN page, the app is loading correctly!</p>
        <p>Current URL: {window.location.pathname}</p>
        <button
          onClick={() => {
            console.log("Button clicked!");
            alert("Button works!");
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "green",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Test Button
        </button>
      </div>
    </div>
  );
}

export default BasicTest;
