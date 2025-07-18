import NavigationButtonVendour from "../../ui/NavigationButtonVendour";
import RenderItemList from "./RenderItemList";

function RendourItemForm({
  handleSubmit,
  reset,
  itemsAdded,
  transactionData,
  register,
  setCurrentStep,
  setItemsAdded,
  setTransactionData,
}) {
  const isAllItemsAdded = itemsAdded >= transactionData.noOfItem;
  const handleItemSubmit = (data) => {
    const newItem = {
      id: Date.now(),
      name: data.itemName,
      price: parseFloat(data.price) || 0,
      quantity: parseInt(data.quantity) || 0,
      site: transactionData.site,
    };

    setTransactionData({
      ...transactionData,
      items: [...transactionData.items, newItem],
    });

    setItemsAdded(itemsAdded + 1);
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
              value={`Add Item (${itemsAdded}/${transactionData.noOfItem})`}
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
              You have successfully added all {transactionData.noOfItem} items
              to this transaction.
            </p>
          </div>
        )}
        {NavigationButtonVendour({
          setCurrentStep,
          isAllItemsAdded,
          setTransactionData,
          transactionData,
          setItemsAdded,
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
