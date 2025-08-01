import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { useState } from "react";
import UpdateInventory from "../updateSite/UpdateInventory";
import AddInventory from "../updateSite/AddInventory";
import UpdatePayment from "../updateSite/UpdatePayment";
import UpdateDetail from "../updateSite/UpdateDetail";

const StyledUpdateDetails = styled.div`
  grid-area: updateDetails;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-sm);
  overflow: auto;

  h4 {
    margin: 0;
    color: var(--color-text-primary);
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-primary-300);
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 1.2rem;
    gap: 1.2rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 1rem;
    gap: 1rem;
    min-height: 300px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.8rem;
    min-height: 250px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  label {
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
  }

  select {
    background-color: var(--color-background-800);
    color: var(--color-text-primary);
    padding: 0.8rem 1rem;
    border-radius: var(--br-m);
    border: 2px solid var(--color-background-600);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    min-width: 200px;
    transition: all 0.2s ease;

    &:hover {
      border-color: var(--color-primary-500);
    }

    &:focus {
      outline: none;
      border-color: var(--color-primary-600);
      box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    gap: 0.8rem;

    label {
      font-size: 0.8rem;
    }

    select {
      padding: 0.6rem 0.8rem;
      font-size: 0.8rem;
      min-width: 40%;
    }
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    flex-direction: column;

    label {
      font-size: 0.75rem;
    }

    select {
      padding: 0.5rem 0.6rem;
      font-size: 0.75rem;
    }
  }
`;

function UpdateDetails({ site }) {
  const [updateContent, setUpdateContent] = useState("Add Inventory");

  return (
    <StyledUpdateDetails>
      <Heading as="h4">Update {updateContent}</Heading>

      <ButtonContainer>
        <label htmlFor="action-select">Select Action:</label>
        <select
          id="action-select"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        >
          <option value="Add Inventory">Add Inventory</option>
          <option value="UpdateInventory">Update Inventory</option>
          <option value="Payment">Add Payment</option>
          <option value="Detail">Update Details</option>
        </select>
      </ButtonContainer>

      {updateContent === "Add Inventory" && (
        <AddInventory site={site} onUpdateContent={setUpdateContent} />
      )}
      {updateContent === "UpdateInventory" && (
        <UpdateInventory site={site} onUpdateContent={setUpdateContent} />
      )}

      {updateContent === "Payment" && (
        <UpdatePayment site={site} onUpdateContent={setUpdateContent} />
      )}
      {updateContent === "Detail" && (
        <UpdateDetail site={site} onUpdateContent={setUpdateContent} />
      )}
    </StyledUpdateDetails>
  );
}

export default UpdateDetails;
