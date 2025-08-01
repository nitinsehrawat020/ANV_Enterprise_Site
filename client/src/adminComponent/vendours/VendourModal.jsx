import {
  CloseButton,
  Content,
  MaterialList,
  ModalContainer,
  PaymentInfo,
  PayPaymentContainer,
  PurchaseItem,
  TableContainer,
  Title,
  TotalBalanceConatiner,
  TransactionBox,
} from "./StyleVendours";
import Heading from "../../ui/Heading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSite } from "../../hooks/useSite";
import RenderTransactionForm from "./RenderTransactionForm";
import RenderSiteForm from "./RenderSiteForm";
import RendourItemForm from "./RendourItemForm";
import PaymentHistory from "./PaymentHistory";
import PayPayment from "./PayPayment";
import { IoArrowBack } from "react-icons/io5";

function VendourModal({ vendour, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const { sites, isLoading } = useSite();

  const [transactionData, setTransactionData] = useState({
    date: "",
    status: "paid",
    noOfSites: 0,
    sites: [], // Array of sites with their items
    currentSiteIndex: 0,
  });
  console.log(transactionData);

  // UI state
  const [currentStep, setCurrentStep] = useState("transaction"); // "transaction", "sites", "items"
  const [currentSiteItemsAdded, setCurrentSiteItemsAdded] = useState(0);

  if (isLoading) return;
  // Handle transaction form submission

  // each item hadel here

  return (
    <ModalContainer>
      <MaterialList>
        <span>
          <CloseButton onClick={onClose}>
            <IoArrowBack />
          </CloseButton>{" "}
          <div className="heading">
            <Heading as="h3">Material Details </Heading>
          </div>
        </span>
        {vendour.transaction
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
          .slice(0, 3) // Take only first 3 transactions
          .map((transaction) => (
            <TransactionBox key={transaction._id}>
              <span>
                <Heading as="h4">
                  Date:
                  {new Date(transaction.date).toLocaleDateString()}
                </Heading>
                <p>Status: {transaction.status}</p>
                <p>Amount: {transaction.amount}</p>
              </span>
              {transaction.items.map((item, itemIndex) => (
                <TableContainer
                  key={itemIndex}
                  style={{ marginBottom: "1rem" }}
                >
                  <h2>
                    <b>Site: {item.site.name}</b>
                  </h2>

                  <table>
                    <thead>
                      <tr>
                        <th>Material</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.itemList.map((listItem) => (
                        <tr key={listItem._id}>
                          <td>{listItem.name}</td>
                          <td>{listItem.price}</td>
                          <td>{listItem.quantity}</td>
                          <td>{listItem.price * listItem.quantity}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="3">Site Total</td>
                        <td>
                          $
                          {item.itemList.reduce(
                            (sum, listItem) =>
                              sum + listItem.price * listItem.quantity,
                            0
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TableContainer>
              ))}
            </TransactionBox>
          ))}
      </MaterialList>
      <PurchaseItem>
        <Heading as="h4">
          {currentStep === "transaction"
            ? "Transaction Details"
            : currentStep === "sites"
            ? "Site Details"
            : `Add Item ${currentSiteItemsAdded + 1} of ${
                transactionData.sites[transactionData.currentSiteIndex]
                  ?.noOfItems || 0
              } for ${
                transactionData.sites[transactionData.currentSiteIndex]
                  ?.siteName || "Site"
              }`}
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
        ) : currentStep === "sites" ? (
          <RenderSiteForm
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
            currentSiteItemsAdded={currentSiteItemsAdded}
            transactionData={transactionData}
            register={register}
            setCurrentStep={setCurrentStep}
            setCurrentSiteItemsAdded={setCurrentSiteItemsAdded}
            setTransactionData={setTransactionData}
            vendour={vendour}
          />
        )}
      </PurchaseItem>
      <PaymentInfo>
        <Title>
          <Heading as="h4">Payment Information</Heading>
        </Title>
        <Content>
          <TotalBalanceConatiner>
            <label htmlFor="totalBalance">Amount </label>
            <input
              type="text"
              id="totalBalance"
              name="totalBalance"
              value={vendour.payment.totalBalance}
              readOnly
            />
          </TotalBalanceConatiner>
          <PaymentHistory vendour={vendour} />
          <PayPayment vendour={vendour} />
        </Content>
      </PaymentInfo>
    </ModalContainer>
  );
}

export default VendourModal;
