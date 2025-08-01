import styled from "styled-components";
import Heading from "../../../ui/Heading";

const PaymentContainer = styled.div`
  grid-area: payment;
  width: 500px;
  height: 300px;
  background-color: var(--color-background-200);
  border-radius: var(--br-m);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const PaymentListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  padding: 1rem;
`;

const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background-color: var(--color-background-200);
  border-radius: var(--br-s);
  font-size: 0.85rem;
  box-shadow: var(--shadow-sm);
`;

const PaymentDetails = styled.div``;

const PaymentTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const PaymentDate = styled.div`
  color: var(--color-text-400);
  font-size: 0.75rem;
`;

const PaymentAmount = styled.div`
  font-weight: bold;
  color: var(--color-primary-700);
  font-size: 1rem;
`;

const NoPaymentMessage = styled.div`
  text-align: center;
  color: var(--color-text-400);
  margin-top: 2rem;
  font-size: 0.9rem;
`;

function RecentPayments({ worker }) {
  return (
    <PaymentContainer>
      <Heading
        as="h4"
        style={{ marginBottom: "1rem", color: "var(--color-primary-700)" }}
      >
        Recent Payments
      </Heading>
      <PaymentListContainer>
        {worker.paymentLog && worker.paymentLog.length > 0 ? (
          worker.paymentLog
            .slice(-6)
            .reverse()
            .map((payment, index) => (
              <PaymentItem key={index}>
                <PaymentDetails>
                  <PaymentTitle>{payment.paymentFor || "Payment"}</PaymentTitle>
                  <PaymentDate>
                    {new Date(payment.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </PaymentDate>
                </PaymentDetails>
                <PaymentAmount>
                  ₹{parseFloat(payment.amount || 0).toLocaleString()}
                </PaymentAmount>
              </PaymentItem>
            ))
        ) : (
          <NoPaymentMessage>No payment history available</NoPaymentMessage>
        )}
      </PaymentListContainer>
    </PaymentContainer>
  );
}

export default RecentPayments;
