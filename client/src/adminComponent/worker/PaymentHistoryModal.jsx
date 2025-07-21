import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useMemo } from "react";

export const ModaContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
`;

export const TableContainer = styled.div`
  overflow: auto;
  scrollbar-width: 1px;

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  height: 50%;

  border-collapse: collapse;
  border-spacing: 1;
  border: 2px solid var(--color-background-800);
  margin-top: 2rem;

  thead tr {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-800);
    border: 1px solid var(--color-background-800);
  }
  thead th {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  td {
    text-align: center;
    padding: 0.7rem;
    border: 1px solid var(--color-background-500);
  }
`;

function PaymentHistoryModal({ workerData }) {
  const sortedWorker = useMemo(() => {
    const worker = workerData.flatMap((worker) =>
      worker.paymentLog.map((payment) => ({
        name: worker.name,
        date: payment.date,
        amount: payment.amount,
        paymentFor: payment.paymentFor,
      }))
    );

    return worker.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }, [workerData]);
  return (
    <ModaContainer>
      <Heading as="h3">Payment History</Heading>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Worker Name</th>
              <th>Payment Date</th>
              <th>Payment For</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedWorker.map((worker, index) => (
              <tr key={index}>
                <td>{worker.name}</td>
                <td>{new Date(worker.date).toLocaleDateString()}</td>
                <td>{worker.paymentFor}</td>
                <td>{worker.amount}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </ModaContainer>
  );
}

export default PaymentHistoryModal;
