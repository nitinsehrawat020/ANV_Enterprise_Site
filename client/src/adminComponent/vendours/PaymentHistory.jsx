import { PaymentHistoryContainer } from "./StyleVendours";
import Heading from "../../ui/Heading";

function PaymentHistory({ vendour }) {
  return (
    <PaymentHistoryContainer>
      <Heading as="h4">Payment History</Heading>

      {vendour.paymentHistory && vendour.paymentHistory.length > 0 ? (
        <div style={{ width: "100%", overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #444" }}>
                <th
                  style={{
                    padding: "0.5rem",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    padding: "0.5rem",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Amount
                </th>
                <th
                  style={{
                    padding: "0.5rem",
                    textAlign: "left",
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Mode
                </th>
              </tr>
            </thead>
            <tbody>
              {vendour.paymentHistory
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort newest first
                .map((payment) => (
                  <tr
                    key={payment._id}
                    style={{
                      borderBottom: "1px solid #333",
                      "&:hover": {
                        backgroundColor: "var(--color-background-600)",
                      },
                    }}
                  >
                    <td
                      style={{
                        padding: "0.5rem",
                        color: "#fff",
                        fontSize: "0.8rem",
                      }}
                    >
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        color: "#4caf50",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      ${payment.amount.toLocaleString()}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem",
                        color: "#fff",
                        fontSize: "0.8rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {payment.mode}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "#888",
          }}
        >
          <p>No payment history available</p>
        </div>
      )}
    </PaymentHistoryContainer>
  );
}

export default PaymentHistory;
