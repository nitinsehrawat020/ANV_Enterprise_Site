import { IoMdArrowRoundBack } from "react-icons/io";
import { BackButton, FormContainer } from "./UpdateInventory";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { formatDateToDDMMYYYY } from "../../../util/helper";

const StyledUpdateDetails = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

function UpdatePayment({ onUpdateContent, site }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { date, amount, mode, to } = data;

    site.paymentLog.push({
      date: formatDateToDDMMYYYY(date),
      amount,
      to,
      mode,
    });
    console.log(site.paymentLog);
  };

  return (
    <StyledUpdateDetails>
      <BackButton>
        <IoMdArrowRoundBack onClick={() => onUpdateContent("Details")} />
      </BackButton>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <label htmlFor="date">Date</label>
            <input type="date" {...register("date")} />
          </p>
          <p>
            <label htmlFor="amount">Amount</label>
            <input type="number" {...register("amout")} />
          </p>
          <p>
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              name="paymentMethod"
              id="paymentMethod"
              {...register("mode")}
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="other">Other</option>
            </select>
          </p>
          <p>
            <label htmlFor="to">Accepted by</label>
            <select name="to" id="to" {...register("to")}>
              <option value="nitin">Nitin</option>
              <option value="vijender">Vijender</option>
            </select>
          </p>
          <input type="submit" value="Update" />
        </form>
      </FormContainer>
    </StyledUpdateDetails>
  );
}

export default UpdatePayment;
