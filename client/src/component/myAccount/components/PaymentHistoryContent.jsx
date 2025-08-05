import { useUser } from "../../LoginAndSignup/useUser";
import {
  AccountHeading,
  TConatiner,
  THeader,
  TBody,
  TR,
  TH,
  TD,
  TWrapper,
} from "../StyleMyAccount";

const PaymentHistoryContent = () => {
  const { user, isLoading } = useUser();

  // Show loading state
  if (isLoading) {
    return (
      <>
        <AccountHeading>Payment History</AccountHeading>
        <div style={{ textAlign: "center", padding: "40px" }}>
          Loading payment history...
        </div>
      </>
    );
  }

  // Extract payment history from user sites
  const orders =
    user?.userSites?.length > 0
      ? user.userSites
          .flatMap((site) => {
            return (
              site.paymentLog
                ?.filter((payment) => payment.amount > 0) // Filter out zero amount payments
                ?.map((payment) => ({
                  _id: payment._id,
                  siteName: site.name,
                  date: payment.date
                    ? new Date(payment.date).toLocaleDateString("en-IN")
                    : "No Date",
                  amount: `₹${payment.amount.toLocaleString("en-IN")}`,
                  receiver: payment.receiver,
                  mode: payment.mode,
                  siteStatus: site.status,
                  workType: site.workType,
                  dateObj: payment.date ? new Date(payment.date) : null,
                })) || []
            );
          })
          .sort((a, b) => {
            // Sort by date (newest first), put null dates at the end
            if (!a.dateObj && !b.dateObj) return 0;
            if (!a.dateObj) return 1;
            if (!b.dateObj) return -1;
            return b.dateObj - a.dateObj;
          })
      : [];

  // Calculate total payments
  const totalPayments = orders.reduce((sum, order) => {
    const amount = parseFloat(order.amount.replace("₹", "").replace(/,/g, ""));
    return sum + amount;
  }, 0);

  return (
    <>
      <AccountHeading>Payment History</AccountHeading>

      {/* Payment Summary */}
      {orders.length > 0 && (
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "var(--color-whitesmoke)",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "600" }}>Total Payments Made:</span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "var(--color-orange)",
            }}
          >
            ₹{totalPayments.toLocaleString("en-IN")}
          </span>
        </div>
      )}

      <TWrapper>
        <TConatiner>
          <THeader>
            <TR>
              <TH>Site Name</TH>
              <TH>Date</TH>
              <TH>Amount</TH>
              <TH>Paid To</TH>
            </TR>
          </THeader>
          <TBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TR key={order._id}>
                  <TD>{order.siteName}</TD>
                  <TD>{order.date}</TD>
                  <TD>{order.amount}</TD>
                  <TD color={false}>{order.receiver}</TD>
                </TR>
              ))
            ) : (
              <TR>
                <TD
                  colSpan="4"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No payment history found
                </TD>
              </TR>
            )}
          </TBody>
        </TConatiner>
      </TWrapper>
    </>
  );
};

export default PaymentHistoryContent;
