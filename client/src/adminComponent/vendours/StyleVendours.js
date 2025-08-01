import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const StyledVendours = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`;

export const VendoursBox = styled.div`
  width: 320px;
  min-height: 300px;
  background: var(--color-background-600);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-background-400);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary-500);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--color-primary-600);
    background: var(--color-background-700);
  }

  @media (max-width: 768px) {
    width: 95vw;
    max-width: 350px;
    min-height: 280px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    min-height: 260px;
    padding: 0.3rem;
  }
`;

export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--color-background-200) 0%,
    var(--color-background-300) 100%
  );
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  border: 1px solid var(--color-background-400);
  transition: all 0.3s ease;

  h3 {
    color: var(--color-primary-700);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 0.8rem 0;
    text-align: center;
    width: 100%;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--color-background-400);
  }

  p {
    color: var(--color-grey-300);
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    strong {
      color: var(--color-grey-100);
      font-weight: 600;
    }
  }

  div {
    background: linear-gradient(
      135deg,
      var(--color-background-100) 0%,
      var(--color-background-200) 100%
    );
    border: 1px solid var(--color-background-400);
    border-radius: 6px;
    padding: 0.8rem;
    width: 100%;
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(
        135deg,
        var(--color-background-200) 0%,
        var(--color-background-300) 100%
      );
      border-color: var(--color-background-500);
    }

    p {
      margin-bottom: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.6rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "material-list purchase-item"
    "material-list payment-info";
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-200);
  padding: 0.2rem;
  gap: 0.4rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "material-list"
      "purchase-item"
      "payment-info";
  }
`;

export const MaterialList = styled.div`
  grid-area: material-list;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-background-800);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .heading {
      width: 100%;
      text-align: center;
    }
  }
  @media ${device.tablet} {
    height: fit-content;
  }
`;

export const TransactionBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-background-800);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border: 1px solid black;
  padding: 1rem;
  gap: 12px;
  background-color: var(--color-background-400);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
export const PurchaseItem = styled.div`
  grid-area: purchase-item;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-background-800);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    text-align: start;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0.5rem;
  }
  p:nth-child(5) {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    width: 100%;
    padding: 0.2rem;
    border: 1px solid var(--color-background-800);
    background-color: var(--color-background-500);
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  select {
    width: 100%;
    padding: 0.2rem;
    border: 1px solid var(--color-background-800);
    background-color: var(--color-background-500);

    border-radius: 0.5rem;
    font-size: 1rem;
  }
  input[type="submit"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--color-background-800);
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: var(--color-primary-500);
    color: white;
    cursor: pointer;
  }
`;

export const PaymentInfo = styled.div`
  grid-area: payment-info;
  display: flex;
  flex-direction: column;
  height: 500px; /* Add explicit height */
  justify-content: top;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-background-800);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  input {
    padding: 0.2rem;
    border: 1px solid var(--color-background-800);
    background-color: var(--color-background-500);
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  @media ${device.tablet} {
    height: fit-content;
  }
`;

export const Title = styled.div``;
export const Content = styled.div`
  width: 100%;
  height: 100%; /* Will fill PaymentInfo height */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "totalBalance totalBalance"
    "paymentHistory payPayment";
  /* Remove flex-direction: column - not needed with grid */
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "totalBalance"
      "payPayment"
      "paymentHistory";
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "totalBalance"
      "payPayment"
      "paymentHistory";
  }
`;

export const TotalBalanceConatiner = styled.div`
  grid-area: totalBalance;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
`;

export const PaymentHistoryContainer = styled.div`
  grid-area: paymentHistory;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  min-height: 100px;
  overflow-y: auto;
  padding: 1rem;

  h4 {
    width: 100%;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem;
    border-bottom: 1px solid #444;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const PayPaymentContainer = styled.div`
  grid-area: payPayment;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  min-height: 100px; /* Ensure minimum height */
  overflow-y: auto; /* Allow scrolling if content exceeds */
  padding: 1rem;

  h4 {
    width: 100%;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem;
    border-bottom: 1px solid #444;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  p {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  select {
    background-color: var(--color-background-500);
  }
  input[type="submit"] {
    background-color: var(--color-primary-500);
  }
`;
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--color-red-500);
  border: 2px solid var(--color-red-300);
  border-radius: var(--br-l);
  cursor: pointer;
  color: white;
  font-size: 30px;

  &:hover {
    background-color: var(--color-red-600);
    border: 2px solid var(--color-red-400);
  }
`;

export const StyleRenderItemForm = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
