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

function VendourModal({ vendour }) {
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
                  <tr key={item.id}>
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
        <Heading as="h4"> Purchase Item</Heading>
        <form>
          <p>
            <label htmlFor="material">item </label>
            <input type="text" id="material" name="material" required />
          </p>
          <p>
            <label htmlFor="price">Price </label>
            <input type="text" id="price" name="price" required />
          </p>
          <p>
            <label htmlFor="quantity">Quantity </label>
            <input type="text" id="quantity" name="quantity" required />
          </p>
          <p>
            <label htmlFor="site">Site </label>
            <input type="text" id="site" name="site" required />
          </p>
          <p>
            <label htmlFor="status">Status </label>
            <select id="status" name="status" required>
              <option value="paid">Paid</option>
              <option value="not paid">Not Paid</option>
            </select>
          </p>
          <input type="submit" value="Add" />
        </form>
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
