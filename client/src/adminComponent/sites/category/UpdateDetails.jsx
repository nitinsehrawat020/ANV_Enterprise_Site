import styled from "styled-components";
import Heading from "../../../ui/Heading";

import { useState } from "react";
import UpdateInventory from "../updateSite/UpdateInventory";
import UpdatePayment from "../updateSite/UpdatePayment";
import { Update } from "@mui/icons-material";
import UpdateDetail from "../updateSite/UpdateDetail";

const StyledUpdateDetails = styled.div`
  grid-area: updateDetails;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  position: relative;
`;

const ButtonContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  align-content: center;
  justify-content: center;
  gap: 1rem 1rem;
`;

const Button = styled.div`
  border-radius: var(--br-m);
  background-color: var(--color-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.2rem;
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid var(--color-primary);

  &:hover {
    border: 2px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);
  }
`;

function UpdateDetails({ site }) {
  const [updateContent, setUpdateContent] = useState("Details");

  return (
    <StyledUpdateDetails>
      <Heading as="h4"> Update {updateContent}</Heading>
      {updateContent === "Details" && (
        <ButtonContainer>
          <Button onClick={() => setUpdateContent("Inventory")}>
            Update Inventory
          </Button>
          <Button onClick={() => setUpdateContent("Payment")}>
            Add Payment
          </Button>
          <Button onClick={() => setUpdateContent("Detail")}>
            Update Details
          </Button>
        </ButtonContainer>
      )}
      {updateContent === "Inventory" && (
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
