import styled from "styled-components";
import Heading from "../../ui/Heading";

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;

  grid-template-areas: "paymentlog paymentInfo";
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-200);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "paymentlog"
      "paymentInfo";
  }
`;

const PaymentLog = styled.div`
  grid-area: paymentlog;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-200);

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    background-color: var(--color-background-700);
  }

  th {
    background-color: var(--color-background-800);
    color: var(--color-white-500);
    font-weight: bold;
    padding: 0.5rem;
  }

  td {
    padding: 0.5rem;
    text-align: center;
  }
`;

export const PaymentInfo = styled.div`
  grid-area: paymentInfo;

  background-color: var(--color-background-200);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* padding: 1rem; */
`;

function PaymentInfoDetails({ worker }) {
  return (
    <PaymentContainer>
      <PaymentLog>
        <Heading as="h4">Payment Log</Heading>
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {worker.paymentLog.map((payment) => (
              <tr key={payment?.id}>
                <td>{payment?.id}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PaymentLog>
      <PaymentInfo>
        <Heading as="h4">Payment Info</Heading>
        <p>Payment ID: 1</p>
        <p>Amount: 1000</p>
        <p>Date: 12/12/2021</p>
      </PaymentInfo>
    </PaymentContainer>
  );
}

export default PaymentInfoDetails;
