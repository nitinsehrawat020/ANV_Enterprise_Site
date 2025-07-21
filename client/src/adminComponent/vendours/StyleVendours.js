import styled from "styled-components";
export const StyledVendours = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 3rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const VendoursBox = styled.div`
  width: 280px;
  height: 250px;
  background-color: var(--color-background-200);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background-200);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--color-background-800);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

export const ModalContainer = styled.div`
  width: 1300px;
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
    justify-content: start;
    gap: 150px;
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
  justify-content: flex-start;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  min-height: 100px; /* Ensure minimum height */
  overflow-y: auto; /* Allow scrolling if content exceeds */
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
