import { useForm } from "react-hook-form";
import { PayPaymentContainer } from "./StyleVendours";
import { useUpdateVendourHistoryPayment } from "../../hooks/useVendour";
import Heading from "../../ui/Heading";

function PayPayment({ vendour }) {
  const { register, handleSubmit, reset } = useForm();
  const { updateVendourHistoryPayment, isLoading } =
    useUpdateVendourHistoryPayment();
  const onSubmit = (data) => {
    updateVendourHistoryPayment({ data, vendourId: vendour._id });
    reset();
  };
  return (
    <PayPaymentContainer>
      <Heading as="h4">Pay Payment</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor="date">Date:</label>
          <input type="date" {...register("date")} />
        </p>
        <p>
          <label htmlFor="amount"> Amount :</label>
          <input type="number" {...register("amount")} />
        </p>
        <p>
          <label htmlFor="mode">Mode:</label>
          <select id="mode" {...register("mode")} required>
            <option value="">Select Mode</option>
            <option value="cash">Cash</option>
            <option value="Upi">UPI</option>
            <option value="other">Other</option>
          </select>
        </p>

        <input type="submit" value="Submit" />
      </form>
    </PayPaymentContainer>
  );
}

export default PayPayment;
