import styled from "styled-components";
import Heading from "../../ui/Heading";
import Calender from "../../ui/Calender";
import PaymentCalender from "./PaymentCalender";
import InventoryDetails from "./InventoryDetails";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PaymentInfoDetails from "./PaymentInfoDetails";
import AttendanceDetails from "./AttendanceDetails";
import { CloseButton } from "../vendours/StyleVendours";
import { IoArrowBack } from "react-icons/io5";
import { capitalizeFirstLetter } from "../../util/helper";

const ModalContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px 1fr 1fr;
  grid-template-areas:
    "title title"
    "attendance payment"
    "inventory paymentInfo";
  gap: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    height: 400px;
    padding: 1rem 2rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 40px repeat(4, 1fr);
    grid-template-areas:
      "title "
      "attendance"
      "inventory"
      "payment"
      "paymentInfo";
    overflow: scroll;
  }
`;

const Title = styled.div`
  grid-area: title;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 420px;

  /* background-color: var(--color-background-200); */
  border-radius: var(--br-l);
  box-shadow: var(--shadow-md);
  padding: 0.5rem;
`;

const Attendance = styled.div`
  grid-area: attendance;
  width: 500px;
  height: 300px;
  background-color: var(--color-background-200);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Inventory = styled.div`
  grid-area: inventory;
  width: 500px;
  height: 250px;
  background-color: var(--color-background-200);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Payment = styled.div`
  grid-area: payment;
  width: 500px;
  height: 300px;
  background-color: var(--color-background-200);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const PaymentInfo = styled.div`
  grid-area: paymentInfo;
  width: 500px;
  height: 250px;
  background-color: var(--color-background-200);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

const AddInventory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-500);
  color: var(--color-white-500);
  padding: 0.5rem;
  border-radius: var(--br-m);
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  &:hover {
    background-color: var(--color-primary-600);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  input {
    padding: 0.5rem;
    border-radius: var(--br-m);
    border: none;
    box-shadow: var(--shadow-md);
  }
  input[type="submit"] {
    width: 100px;
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    padding: 0.5rem;
    border-radius: var(--br-m);
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    &:hover {
      background-color: var(--color-primary-600);
    }
  }
`;

function WorkerDetailsModal({ worker, onClose }) {
  const [addInventory, setAddInventory] = useState(false);
  const { register, handleSubmit } = useForm();

  const attendanceData = Object.entries(worker.attendance).map(
    ([date, details]) => ({
      date,
      status: typeof details === "object" ? details.value : details,
    })
  );

  const paymentDate = worker.paymentLog.map((log) => log.date);

  function onSubmit(data) {
    const item = { id: worker.inventory.length + 1, ...data };

    // Add inventory to worker
    worker.inventory.push(item);
    console.log(worker);
  }

  return (
    <ModalContainer>
      <Title>
        <CloseButton onClick={onClose}>
          <IoArrowBack />
        </CloseButton>{" "}
        <Heading as="h3">{capitalizeFirstLetter(worker.name)}</Heading>
      </Title>
      <Attendance>
        <AttendanceDetails worker={worker} />
      </Attendance>
      <Payment>
        Payment <PaymentCalender paymentDates={paymentDate} />
      </Payment>
      <Inventory>
        Inventory
        <AddInventory onClick={() => setAddInventory(!addInventory)}>
          {!addInventory ? "Add Inventory" : "View Inventory"}
        </AddInventory>
        {addInventory ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Item Name" {...register("name")} />
            <input
              type="number"
              placeholder="Quantity"
              {...register("quantity")}
            />
            <input type="submit" value="Add Item" />
          </Form>
        ) : (
          <InventoryDetails worker={worker} />
        )}
      </Inventory>
      <PaymentInfo>
        <PaymentInfoDetails worker={worker} />
      </PaymentInfo>
    </ModalContainer>
  );
}

export default WorkerDetailsModal;
