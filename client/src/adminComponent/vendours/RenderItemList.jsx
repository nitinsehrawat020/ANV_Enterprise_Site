function RenderItemList({ transactionData }) {
  // Safety checks
  if (
    !transactionData ||
    !transactionData.sites ||
    !Array.isArray(transactionData.sites)
  ) {
    return (
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#464646",
          borderRadius: "8px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p>No transaction data available</p>
      </div>
    );
  }

  // Get current site items
  const currentSite = transactionData.sites[transactionData.currentSiteIndex];
  const currentSiteItems = currentSite?.items || [];

  if (currentSiteItems.length === 0) {
    return (
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#464646",
          borderRadius: "8px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p>No items added yet for {currentSite?.siteName || "this site"}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#464646",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
      }}
    >
      <h5 style={{ marginTop: "0", marginBottom: "1rem" }}>
        Items Added for {currentSite?.siteName || "Site"}:
      </h5>
      <ul style={{ margin: "0", paddingLeft: "1.2rem" }}>
        {currentSiteItems.map((item, index) => (
          <li
            key={item.id || index}
            style={{ marginBottom: "0.5rem", lineHeight: "1.4" }}
          >
            <strong>
              {index + 1}. {item.name}
            </strong>
            <br />
            <small style={{ color: "#fff" }}>
              ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </small>
          </li>
        ))}
      </ul>
      <hr
        style={{
          margin: "1rem 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />
      <div style={{ textAlign: "right", fontWeight: "bold" }}>
        Site Total: $
        {currentSiteItems
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default RenderItemList;
