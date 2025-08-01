import { useState } from "react";
import { useGetVendour } from "../../hooks/useVendour";
import { capitalizeFirstLetter } from "../../util/helper";
import { StyledVendours, InnerBox, VendoursBox } from "./StyleVendours";

import VendourModal from "./VendourModal";

function VendoursList() {
  const [selectesVendour, setSelectedVendour] = useState("");

  const { vendour, isLoading } = useGetVendour();

  if (isLoading) return;

  // Helper function to get latest transaction
  const getLatestTransaction = (transactions) => {
    if (!transactions || transactions.length === 0) return null;
    return transactions.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  };

  // Helper function to format balance
  const formatBalance = (balance) => {
    if (!balance) return "₹0";
    return `₹${balance.toLocaleString()}`;
  };

  // Helper function to get payment status
  const getPaymentStatus = (vendour) => {
    const totalBalance = vendour.payment?.totalBalance || 0;

    if (totalBalance > 50000)
      return { status: "high", color: "#ff4757", icon: "🔴" };
    if (totalBalance === 0)
      return { status: "clear", color: "#2ed573", icon: "🟢" };
    return { status: "normal", color: "#5352ed", icon: "�" };
  };

  // Helper function to get current month transactions
  const getCurrentMonthTransactions = (transactions) => {
    if (!transactions || transactions.length === 0) return 0;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    }).length;
  };

  // Helper function to get recent activity
  const getRecentActivity = (vendour) => {
    const latestTransaction = getLatestTransaction(vendour.transaction);
    if (!latestTransaction) return "No activity";

    const daysSince = Math.floor(
      (new Date() - new Date(latestTransaction.date)) / (1000 * 60 * 60 * 24)
    );
    if (daysSince === 0) return "Today";
    if (daysSince === 1) return "Yesterday";
    if (daysSince < 7) return `${daysSince} days ago`;
    if (daysSince < 30) return `${Math.floor(daysSince / 7)} weeks ago`;
    return `${Math.floor(daysSince / 30)} months ago`;
  };

  return (
    <StyledVendours>
      {!selectesVendour ? (
        vendour.map((vendour) => {
          const currentMonthDeals = getCurrentMonthTransactions(
            vendour.transaction
          );
          const paymentStatus = getPaymentStatus(vendour);
          const recentActivity = getRecentActivity(vendour);

          return (
            <VendoursBox
              key={vendour._id}
              onClick={() => setSelectedVendour(vendour)}
            >
              <InnerBox>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3>{capitalizeFirstLetter(vendour.name)}</h3>
                  <span style={{ fontSize: "1.2rem" }}>
                    {paymentStatus.icon}
                  </span>
                </div>

                <p>
                  <strong>📞</strong> {vendour.phoneNumber}
                </p>

                {vendour.address && (
                  <p>
                    <strong>📍</strong>{" "}
                    {vendour.address.length > 30
                      ? `${vendour.address.substring(0, 30)}...`
                      : vendour.address}
                  </p>
                )}

                <div style={{ marginTop: "0.8rem", fontSize: "0.85rem" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.4rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <p>
                      <strong>💰</strong>{" "}
                      {formatBalance(vendour.payment?.totalBalance)}
                    </p>
                    <p>
                      <strong>📊</strong> {currentMonthDeals} this month
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0.6rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    <p>
                      <strong>🕒</strong> {recentActivity}
                    </p>
                    {vendour.itemCosting && vendour.itemCosting.length > 0 && (
                      <p>
                        <strong>🛠️</strong> {vendour.itemCosting.length} items
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      marginTop: "0.8rem",
                      padding: "0.4rem",
                      backgroundColor: `${paymentStatus.color}20`,
                      borderRadius: "6px",
                      border: `1px solid ${paymentStatus.color}40`,
                      textAlign: "center",
                    }}
                  >
                    <small
                      style={{
                        color: paymentStatus.color,
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {paymentStatus.status === "high" && "High Balance"}
                      {paymentStatus.status === "clear" && "All Clear"}
                      {paymentStatus.status === "normal" && "Active"}
                    </small>
                  </div>
                </div>
              </InnerBox>
            </VendoursBox>
          );
        })
      ) : (
        <VendourModal
          vendour={selectesVendour}
          onClose={() => setSelectedVendour("")}
        />
      )}
    </StyledVendours>
  );
}

export default VendoursList;
