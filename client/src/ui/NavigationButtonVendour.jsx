import { useVendourTransaction } from "../hooks/useVendour";

function NavigationButtonVendour({
  setCurrentStep,
  isAllItemsAdded,
  setTransactionData,
  transactionData,
  setCurrentSiteItemsAdded,
  currentSiteItemsAdded, // eslint-disable-line no-unused-vars
  vendour,
}) {
  const { updateVendourTransaction, isLoading } = useVendourTransaction();

  const goBackToTransaction = () => {
    setCurrentStep("transaction");
  };

  const goToNextSite = () => {
    const nextSiteIndex = transactionData.currentSiteIndex + 1;
    setTransactionData({
      ...transactionData,
      currentSiteIndex: nextSiteIndex,
    });
    setCurrentSiteItemsAdded(0); // Reset items count for next site
  };

  const isLastSite =
    transactionData.currentSiteIndex >= transactionData.sites.length - 1;

  // final submit button
  const handleCompleteTransaction = () => {
    // Calculate total amount from all sites and their items
    let totalAmount = 0;
    const allItems = [];

    transactionData.sites.forEach((site) => {
      if (site.items && Array.isArray(site.items)) {
        site.items.forEach((item) => {
          if (
            item &&
            typeof item.price === "number" &&
            typeof item.quantity === "number"
          ) {
            totalAmount += item.price * item.quantity;
            allItems.push({
              ...item,
              site: site.siteName,
            });
          }
        });
      }
    });

    // API call payload
    const payload = {
      date: transactionData.date,
      amount: totalAmount,
      status: transactionData.status,
      items: transactionData.sites.map((site) => ({
        site: site.siteId,
        itemList: site.items || [],
      })),
    };

    updateVendourTransaction({ data: payload, vendourId: vendour._id });

    // Reset to initial state
    setTransactionData({
      date: "",
      status: "paid",
      noOfSites: 0,
      sites: [],
      currentSiteIndex: 0,
    });
    setCurrentStep("transaction");
    setCurrentSiteItemsAdded(0);
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
        <>
          {!isLastSite ? (
            <button
              type="button"
              onClick={goToNextSite}
              style={{
                padding: "0.5rem 1.5rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Next Site →
            </button>
          ) : (
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
              disabled={isLoading}
            >
              🎉 Complete Transaction
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default NavigationButtonVendour;
