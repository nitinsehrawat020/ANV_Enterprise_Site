function RenderItemList({ transactionData }) {
  console.log(transactionData);

  if (transactionData.items.length === 0) {
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
        <p>No items added yet</p>
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
      <h5 style={{ marginTop: "0", marginBottom: "1rem" }}>Items Added:</h5>
      <ul style={{ margin: "0", paddingLeft: "1.2rem" }}>
        {transactionData.items.map((item, index) => (
          <li
            key={item.id}
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
        Total: $
        {transactionData.items
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
  );
}

export default RenderItemList;
