import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import DesktopTable from "./DesktopTable";
import MobileForm from "./MobileForm";
import { formatDate } from "../../util/helper";

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

  const updateWednesdayPayment = () => {
    console.log("Wednesday Payment Updated");

    // Update Wednesday Payment
    workerData.forEach((worker) => {
      const payment = {
        date: formatDate(new Date()),
        amount: 1000,
        paymentType: "cash",
        paymentFor: "weekly",
      };
      worker.paymentLog.push(payment);
      worker.payment.weeklyGiven += payment.amount;
    });
    console.log(workerData);
  };

  const onSubmit = (data) => {
    console.log(data);

    //collecting all the data about payment of 1 worker
    const payments = [
      {
        id: +data.workerId_1,
        amount: +data.amount_1,
        date: formatDate(new Date(data.date_1)),
        paymentFor: data.paymentFor_1,
      },
      {
        id: +data.workerId_2,
        amount: +data.amount_2,
        date: formatDate(new Date(data.date_2)),
        paymentFor: data.paymentFor_2,
      },
      {
        id: +data.workerId_3,
        amount: +data.amount_3,
        date: formatDate(new Date(data.date_3)),
        paymentFor: data.paymentFor_3,
      },
      {
        id: +data.workerId_4,
        amount: +data.amount_4,
        date: formatDate(new Date(data.date_4)),
        paymentFor: data.paymentFor_4,
      },
      {
        id: +data.workerId_5,
        amount: +data.amount_5,
        date: formatDate(new Date(data.date_5)),
        paymentFor: data.paymentFor_5,
      },
      {
        id: +data.workerId_6,
        amount: +data.amount_6,
        date: formatDate(new Date(data.date_6)),
        paymentFor: data.paymentFor_6,
      },
    ];
    console.log(payments);

    //updating the payment log of the worker
    payments.forEach((payment) => {
      if (isValidPayment(payment)) {
        const worker = workerData.find((worker) => worker.id === payment.id);
        if (worker) {
          worker.paymentLog.push(payment);
          updateWorkerPayment.call(worker, payment);
        }
        console.log(worker);
      }
    });
    reset();
  };

  //checking if the payment is valid or not
  const isValidPayment = (payment) => {
    return payment.id && payment.amount && payment.date && payment.paymentFor;
  };

  //updating the worker payment
  const updateWorkerPayment = function (payment) {
    if (payment.paymentFor === "weekly") {
      this.payment.weeklyGiven += payment.amount;
    } else if (payment.paymentFor === "advance") {
      this.payment.advance += payment.amount;
    } else if (payment.paymentFor === "salary") {
      this.payment.totalSalery -= payment.amount;
    }
  };
  return (
    <ModelContainer>
      <Header>
        <Heading as="h3" className="heading">
          Update Payment
        </Heading>
        <Wednesday onClick={updateWednesdayPayment}>
          Update Wednesday Payment
        </Wednesday>
      </Header>
      <TableContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DesktopTable
            register={register}
            workerData={workerData}
            today={formatDate(new Date())}
          />
          <MobileForm
            register={register}
            workerData={workerData}
            today={formatDate(new Date())}
            updateWednesdayPayment={updateWednesdayPayment}
          />
        </form>
      </TableContainer>
    </ModelContainer>
  );
}

export default UpdatePaymentModal;
