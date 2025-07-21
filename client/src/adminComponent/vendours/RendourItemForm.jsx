import NavigationButtonVendour from "../../ui/NavigationButtonVendour";
import RenderItemList from "./RenderItemList";

function RendourItemForm({
  handleSubmit,
  reset,
  currentSiteItemsAdded,
  transactionData,
  register,
  setCurrentStep,
  setCurrentSiteItemsAdded,
  setTransactionData,
  vendour,
}) {
  const currentSite = transactionData.sites?.[transactionData.currentSiteIndex];
  const totalItemsForCurrentSite = currentSite?.noOfItems || 0;
  const isAllItemsAdded = currentSiteItemsAdded >= totalItemsForCurrentSite;

  // Debug logging
  console.log("RendourItemForm Debug:", {
    currentSiteIndex: transactionData.currentSiteIndex,
    sitesLength: transactionData.sites?.length,
    currentSite,
    currentSiteItemsAdded,
    totalItemsForCurrentSite,
  });

  // Safety check - if no current site, return error message
  if (!currentSite) {
    return (
      <div style={{ color: "red", padding: "1rem" }}>
        Error: No current site found. Please go back and set up sites first.
      </div>
    );
  }

  const handleItemSubmit = (data) => {
    const newItem = {
      id: Date.now(), // Simple ID generation
      name: data.itemName,
      price: parseFloat(data.price) || 0,
      quantity: parseInt(data.quantity) || 0,
    };

    // Update the current site's items array
    const updatedSites = [...transactionData.sites];

    // Ensure the current site exists and has an items array
    if (!updatedSites[transactionData.currentSiteIndex]) {
      console.error(
        "Current site index not found:",
        transactionData.currentSiteIndex
      );
      return;
    }

    if (!updatedSites[transactionData.currentSiteIndex].items) {
      updatedSites[transactionData.currentSiteIndex].items = [];
    }

    updatedSites[transactionData.currentSiteIndex].items.push(newItem);

    setTransactionData({
      ...transactionData,
      sites: updatedSites,
    });

    setCurrentSiteItemsAdded(currentSiteItemsAdded + 1);
    reset();
  };

  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      {/* Left side - Form or completion message */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        {!isAllItemsAdded ? (
          <form onSubmit={handleSubmit(handleItemSubmit)}>
            <p>
              <label htmlFor="itemName">Item Name </label>
              <input
                type="text"
                id="itemName"
                {...register("itemName")}
                required
              />
            </p>
            <p>
              <label htmlFor="price">Price </label>
              <input
                type="number"
                step="0.01"
                id="price"
                {...register("price")}
                required
              />
            </p>
            <p>
              <label htmlFor="quantity">Quantity </label>
              <input
                type="number"
                id="quantity"
                {...register("quantity")}
                required
              />
            </p>
            <input
              type="submit"
              value={`Add Item (${currentSiteItemsAdded}/${totalItemsForCurrentSite})`}
            />
          </form>
        ) : (
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#e8f5e8",
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid #4caf50",
            }}
          >
            <h4 style={{ color: "#2e7d32", marginTop: "0" }}>
              ✅ All Items Added!
            </h4>
            <p style={{ color: "#2e7d32", margin: "0.5rem 0" }}>
              You have successfully added all {totalItemsForCurrentSite} items
              for {currentSite?.siteName || "this site"}.
            </p>
          </div>
        )}
        {NavigationButtonVendour({
          setCurrentStep,
          isAllItemsAdded,
          setTransactionData,
          transactionData,
          setCurrentSiteItemsAdded,
          currentSiteItemsAdded,
          vendour,
        })}
      </div>

      {/* Right side - Items list */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        {RenderItemList({ transactionData })}
      </div>
    </div>
  );
}

export default RendourItemForm;
