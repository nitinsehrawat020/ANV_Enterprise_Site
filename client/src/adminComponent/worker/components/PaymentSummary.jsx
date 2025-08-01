import styled from "styled-components";
import Heading from "../../../ui/Heading";

const PaymentSummaryContainer = styled.div`
  width: 100%;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  padding: 1rem;
  box-shadow: var(--shadow-md);
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

const SummaryCard = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-background-300) 0%,
    var(--color-background-400) 100%
  );
  border-radius: 8px;
  padding: 0.8rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-background-500);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--color-primary-500);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: var(--color-background-600);
  }
`;

const SummaryLabel = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-400);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const SummaryValue = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-primary-700);
`;

function PaymentSummary({ paymentSummary }) {
  return (
    <PaymentSummaryContainer>
      <Heading as="h5" style={{ marginBottom: "1rem", fontSize: "1rem" }}>
        Payment Summary
      </Heading>
      <SummaryGrid>
        <SummaryCard>
          <SummaryLabel>Weekly Given</SummaryLabel>
          <SummaryValue>
            ₹{paymentSummary.weeklyGiven.toLocaleString()}
          </SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>Advance Given</SummaryLabel>
          <SummaryValue>
            ₹{paymentSummary.advanceGiven.toLocaleString()}
          </SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>Total Paid</SummaryLabel>
          <SummaryValue>
            ₹{paymentSummary.totalSalary.toLocaleString()}
          </SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>Pending Payment</SummaryLabel>
          <SummaryValue
            style={{
              color: paymentSummary.pendingPayment > 0 ? "#ef4444" : "#10b981",
            }}
          >
            ₹{paymentSummary.pendingPayment.toLocaleString()}
          </SummaryValue>
        </SummaryCard>
      </SummaryGrid>
    </PaymentSummaryContainer>
  );
}

export default PaymentSummary;
