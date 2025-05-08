import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import { formatDate, getTodayFormattedDate } from "../../util/helper";

import { format } from "date-fns";

const ModelContainer = styled.div`
  /* height: 400px; */
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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  input[type="submit"] {
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    cursor: pointer;
    transition: all 0.3s;
  }

  input[type="submit"]:hover {
    background-color: var(--color-primary-600);
  }

  input[type="submit"]:active {
    background-color: var(--color-primary-700);
  }

  input[type="submit"]:disabled {
    background-color: var(--color-background-200);
    color: var(--color-background-500);
    cursor: not-allowed;
  }

  input[type="submit"]:disabled:hover {
    background-color: var(--color-background-200);
  }

  input[type="text"] {
    width: 100%;
  }

  select {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  select:focus {
    outline: none;
  }

  input[type="file"] {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  input[type="date"] {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    color: var(--color-white-500);
  }
`;

function AddWorkerModal({ workerData = [] }) {
  const todayDates = formatDate(new Date());
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    join: todayDates,
  });

  const onSubmit = (data) => {
    workerData.push({
      id: workerData.length + 1,
      name: data.name,
      phone_number: data.phone_number,
      join: data.join,
      member_type: data.member_type,
      active_status: data.active_status,
      payment: {
        totalSalery: 0,
        weeklyGiven: 0,
        advance: 0,
        get due() {
          return this.totalSalery - this.weeklyGiven;
        },
      },
      paymentLog: [],
      attendance: {},
    });

    reset();
  };
  return (
    <ModelContainer>
      <Heading as="h3">Add Worker</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="text" placeholder="Phone" {...register("phone_number ")} />
        <input type="date" placeholder="join" {...register("join")} />
        <select {...register("member_type")}>
          <option value="worker">Worker</option>
          <option value="helper">Helper</option>
        </select>
        <select {...register("active_status")}>
          <option value="true">Active</option>
          <option value="false">Not Active</option>
        </select>
        <input type="file" {...register("image")} />

        <input type="submit" value="Add Worker" />
      </form>
    </ModelContainer>
  );
}

export default AddWorkerModal;
