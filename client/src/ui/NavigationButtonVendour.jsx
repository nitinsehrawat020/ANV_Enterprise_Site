function NavigationButtonVendour({
  setCurrentStep,
  isAllItemsAdded,
  setTransactionData,
  transactionData,
  setItemsAdded,
}) {
  const goBackToTransaction = () => {
    setCurrentStep("transaction");
  };

  // final submit button
  const handleCompleteTransaction = () => {
    console.log("Complete transaction data:", transactionData);

    // Calculate total amount from all items
    const totalAmount = transactionData.items
      .filter(
        (item) =>
          item &&
          typeof item.price === "number" &&
          typeof item.quantity === "number"
      )
      .reduce((sum, item) => sum + item.price * item.quantity, 0);

    // API call would go here
    const payload = {
      date: transactionData.date,
      site: transactionData.site,
      status: transactionData.status,
      items: transactionData.items,
      amount: totalAmount,
    };

    console.log("Payload with total amount:", payload);

    setTransactionData({
      date: "",
      site: "",
      noOfItem: 0,
      status: "paid",
      items: [],
    });
    setCurrentStep("transaction");
    setItemsAdded(0);
  };
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "flex-start",
      }}
    >
      <button
        type="button"
        onClick={goBackToTransaction}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back to Transaction
      </button>
      {isAllItemsAdded && (
        <button
          type="button"
          onClick={handleCompleteTransaction}
          style={{
            padding: "0.5rem 1.5rem",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          🎉 Complete Transaction
        </button>
      )}
    </div>
  );
}

export default NavigationButtonVendour;
