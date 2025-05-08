import styled from "styled-components";

export const StyleMobileForm = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    /* gap: 0.5rem; */
    padding: 1rem;
    font-size: 0.7rem;

    select {
      padding: 0.2rem;
      border-radius: 5px;
      border: 1px solid var(--color-background-500);
      background-color: var(--color-background-800);
    }
    input {
      width: 80px;
      padding: 0.2rem;
      border-radius: 5px;
      border: 1px solid var(--color-background-500);
      background-color: var(--color-background-800);
    }
    input[type="date"] {
      width: 80%;
    }
    select:focus,
    input:focus {
      outline: 2px solid var(--color-background-800);
      outline-offset: -1px;
    }
    select:disabled,
    input:disabled {
      background-color: var(--color-background-200);
      color: var(--color-background-500);
    }

    input[type="submit"] {
      padding: 0.2rem;
      border-radius: 5px;
      border: 1px solid var(--color-background-500);
      background-color: var(--color-primary-700);
      color: var(--color-white-500);
      cursor: pointer;
    }
  }
`;
const StyleForm = styled.div`
  width: 180px;
  height: 180px;
  background-color: var(--color-background-200);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--br-m);
  box-shadow: var(--shadow-lg);
  /* font-size: 1rem;*/

  scroll-snap-align: center;

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
`;

const Wednesday = styled.div`
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid var(--color-background-500);
  background-color: var(--color-primary-700);
  color: var(--color-white-500);
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-500);
  }
`;

const FormContainer = styled.div`
  width: 200px;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.7rem;

  overflow: scroll;
  scrollbar-width: 1px;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

function MobileForm({ register, workerData, today, updateWednesdayPayment }) {
  return (
    <StyleMobileForm>
      <input type="submit" value="Submit" />
      <Wednesday onClick={updateWednesdayPayment}>Wednesday Payment</Wednesday>
      <FormContainer>
        <StyleForm>
          <span>
            <label htmlFor="id_1">Worker</label>
            <select {...register("workerId_1")} id="id_1">
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </span>
          <span>
            <label htmlFor="date_1">Date</label>
            <input {...register("date_1")} type="date_1" defaultValue={today} />
          </span>
          <span>
            <label htmlFor="amount">Amount</label>
            <input {...register("amount_1")} type="number" id="amount" />
          </span>
          <span>
            <label htmlFor="payment_1">Payment For</label>
            <select {...register("paymentFor_1")} id="payment_1">
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </span>
        </StyleForm>
        <StyleForm>
          <span>
            <label htmlFor="id_2">Worker</label>
            <select {...register("workerId_2")} id="id_2">
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </span>
          <span>
            <label htmlFor="date_2">Date</label>
            <input
              {...register("date_2")}
              type="date"
              defaultValue={today}
              id="date_2"
            />
          </span>
          <span>
            <label htmlFor="amount_2">Amount</label>
            <input {...register("amount_2")} type="number" id="amount_2" />
          </span>
          <span>
            <label htmlFor="paymentfor_2">Payment For</label>
            <select {...register("paymentFor_2")} id="paymentfor_2">
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </span>
        </StyleForm>
        <StyleForm>
          <span>
            <label htmlFor="id_3">Worker</label>
            <select {...register("workerId_3")} id="id_3">
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </span>
          <span>
            <label htmlFor="payment_3">Date</label>
            <input
              {...register("date_3")}
              type="date"
              defaultValue={today}
              id="payment_3"
            />
          </span>
          <span>
            <label htmlFor="amount_3">Amount</label>
            <input {...register("amount_3")} type="number" id="amount_3" />
          </span>
          <span>
            <label htmlFor="paymentfor_3">Payment For</label>
            <select {...register("paymentFor_3")} id="paymentfor_3">
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </span>
        </StyleForm>
      </FormContainer>
    </StyleMobileForm>
  );
}

export default MobileForm;
