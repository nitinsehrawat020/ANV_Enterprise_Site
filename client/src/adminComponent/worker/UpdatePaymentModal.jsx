import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import DesktopTable from "./DesktopTable";
import MobileForm from "./MobileForm";
import { formatDate } from "../../util/helper";
import { useState } from "react";
import {
  useUpdateWedesdayPayment,
  useUpdateworkerPayment,
} from "../../hooks/useWorker";

const ModelContainer = styled.div`
  height: 400px;
  /* width: 200px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 5rem;
`;

export const Wednesday = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.7rem;
  border-radius: var(--br-l);
  background-color: var(--color-primary-700);
  &:hover {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableContainer = styled.div`
  overflow: auto;
  scrollbar-width: 1px;

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

function UpdatePaymentModal({ workerData }) {
  const { register, handleSubmit, reset } = useForm();
  const { updateWednesdayPayment } = useUpdateWedesdayPayment();
  const { updateWorkerPayment } = useUpdateworkerPayment();

  // State to trigger reset of DesktopTable
  const [resetTrigger, setResetTrigger] = useState(0);

  const WednesdayPayment = () => {
    // Update Wednesday Payment
    updateWednesdayPayment({ data: { date: new Date() } });
  };

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    // Simple function to collect all entered worker payments
    const getWorkerPayments = () => {
      const payments = [];

      // Find all workerId fields in the form data
      Object.keys(data).forEach((key) => {
        if (key.startsWith("workerId_")) {
          const index = key.split("_")[1]; // Get the number part
          const workerId = data[`workerId_${index}`];
          const amount = data[`amount_${index}`];
          const date = data[`date_${index}`];
          const paymentFor = data[`paymentFor_${index}`];

          // Only include if worker is selected and amount is entered
          if (workerId && amount && parseFloat(amount) > 0) {
            payments.push({
              workerId: workerId,
              amount: parseFloat(amount),
              date: date || formatDate(new Date()),
              paymentFor: paymentFor || "Payment",
            });
          }
        }
      });

      return payments;
    };

    const workerPayments = getWorkerPayments();
    console.log("Worker payments array:", workerPayments);
    console.log(`Total payments: ${workerPayments.length}`);

    // Submit to API if we have valid payments
    if (workerPayments.length > 0) {
      try {
        updateWorkerPayment({ data: { workers: workerPayments } });
        console.log("Payments submitted successfully");

        // Reset the form data
        reset();

        // Trigger reset of DesktopTable by incrementing the resetTrigger
        setResetTrigger((prev) => prev + 1);
      } catch (error) {
        console.error("Error submitting payments:", error);
        alert("Error submitting payments. Please try again.");
      }
    } else {
      alert("Please select workers and enter payment amounts");
    }
  };

  return (
    <ModelContainer>
      <Header>
        <Heading as="h3" className="heading">
          Update Payment
        </Heading>
        <Wednesday onClick={WednesdayPayment}>
          Update Wednesday Payment
        </Wednesday>
      </Header>
      <TableContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DesktopTable
            register={register}
            workerData={workerData}
            today={formatDate(new Date())}
            resetTrigger={resetTrigger}
          />
          <MobileForm
            register={register}
            workerData={workerData}
            today={formatDate(new Date())}
            updateWednesdayPayment={WednesdayPayment}
            resetTrigger={resetTrigger}
          />
        </form>
      </TableContainer>
    </ModelContainer>
  );
}

export default UpdatePaymentModal;
