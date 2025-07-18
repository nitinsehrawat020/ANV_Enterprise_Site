import {
  ButtonGroup,
  Content,
  MaterialList,
  ModalContainer,
  PaymentInfo,
  PurchaseItem,
  Title,
  TransactionBox,
} from "./StyleVendours";
import Heading from "../../ui/Heading";
import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSite } from "../../hooks/useSite";
import RenderTransactionForm from "./RenderTransactionForm";
import RendourItemForm from "./RendourItemForm";

function VendourModal({ vendour, onBack }) {
  const { register, handleSubmit, reset } = useForm();
  const { sites, isLoading } = useSite();

  const [transactionData, setTransactionData] = useState({
    date: "",
    site: "",
    noOfItem: 0,
    status: "paid",
    items: [],
  });

  // UI state
  const [currentStep, setCurrentStep] = useState("transaction");
  const [itemsAdded, setItemsAdded] = useState(0);

  if (isLoading) return;
  // Handle transaction form submission

  // each item hadel here

  return (
    <ModalContainer>
      <MaterialList>
        <Heading as="h3">Material Details</Heading>
        {vendour.transaction.map((transaction) => (
          <TransactionBox key={transaction.id}>
            <p>
              Date: {transaction.date} || Status: {transaction.status}
            </p>

            <table>
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Site</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {transaction.items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.site}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4">Total</td>
                  <td>{transaction.amount}</td>
                </tr>
              </tbody>
            </table>
          </TransactionBox>
        ))}
      </MaterialList>

      <PurchaseItem>
        <Heading as="h4">
          {currentStep === "transaction"
            ? "Transaction Details"
            : `Add Item ${itemsAdded + 1} of ${transactionData.noOfItem}`}
        </Heading>

        {currentStep === "transaction" ? (
          <RenderTransactionForm
            handleSubmit={handleSubmit}
            setTransactionData={setTransactionData}
            setCurrentStep={setCurrentStep}
            reset={reset}
            register={register}
            sites={sites}
            transactionData={transactionData}
          />
        ) : (
          <RendourItemForm
            handleSubmit={handleSubmit}
            reset={reset}
            itemsAdded={itemsAdded}
            transactionData={transactionData}
            register={register}
            setCurrentStep={setCurrentStep}
            setItemsAdded={setItemsAdded}
            setTransactionData={setTransactionData}
          />
        )}
      </PurchaseItem>
      <PaymentInfo>
        <Title>
          <Heading as="h4">Payment Information</Heading>
        </Title>
        <Content>
          <p>
            <label htmlFor="totalBalance">Total Balance </label>
            <input
              type="text"
              id="totalBalance"
              name="totalBalance"
              value={vendour.payment.totalBalance}
              readOnly
            />
          </p>
          <ButtonGroup>
            <Button variant="filled">Pay Payment</Button>
            <Button variant="filled">Payment History</Button>
          </ButtonGroup>
        </Content>
      </PaymentInfo>
    </ModalContainer>
  );
}

export default VendourModal;
