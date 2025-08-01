import styled from "styled-components";
import { capitalizeFirstLetter } from "../../../util/helper";
import Heading from "../../../ui/Heading";
import CostMakingDetails from "./CostMakingDetails";
import UpdateDetails from "./UpdateDetails";
import { useState } from "react";
import SeeDetails from "./SeeDetails";
import { device } from "../../../Styles/Theme";

import { IoArrowBack } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: ${(props) => (props.seeDetails ? "1fr" : "1fr 1fr")};
  grid-template-rows: ${(props) =>
    props.seeDetails ? "50px 1fr" : "50px 1fr 1fr "};
  grid-template-areas: ${(props) =>
    props.seeDetails
      ? `"siteName siteName"
    "seeDetails seeDetails"`
      : `"siteName siteName"
    "inventory costMaking"
    "PaymentDetails updateDetails"`};
  grid-gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-800);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    width: 100%;
    overflow: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto auto auto auto;
    grid-template-areas:
      "siteName"
      "inventory"
      "costMaking"
      "PaymentDetails"
      "updateDetails";
  }
`;

const SiteName = styled.div`
  grid-area: siteName;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--br-l);

  h3 {
  }
`;

const Inventory = styled.div`
  grid-area: inventory;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);

  @media ${device.tablet} {
    height: 300px;
    padding: 0.5rem;
  }
`;
export const TableContainer = styled.div`
  width: 80%;
  max-width: 300px;
  overflow: auto;
  scrollbar-width: 1px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  @media ${device.tablet} {
    height: 300px;
    padding: 0.5rem;
  }
`;

const PaymentDetails = styled.div`
  grid-area: PaymentDetails;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    height: 300px;
  }
`;
const SeeDetailsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
  background-color: var(--color-background-500);
  border: 2px solid var(--color-background-200);
  border-radius: var(--br-l);
  cursor: pointer;
  .mobileIcon {
    display: none;
    @media ${device.mobile} {
      display: flex;
    }
  }
  &:hover {
    background-color: var(--color-background-800);
    border: 2px solid var(--color-background-500);
  }
`;

const CloseButton = styled.div`
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

function SiteModal({ site, onClose }) {
  const [seeDetails, setSeeDetails] = useState(false);

  return (
    <ModalContainer seeDetails={seeDetails}>
      <SiteName>
        <CloseButton onClick={onClose}>
          <IoArrowBack />
        </CloseButton>{" "}
        <Heading as="h3">{capitalizeFirstLetter(site.name)}</Heading>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <SeeDetailsButton onClick={() => setSeeDetails((value) => !value)}>
            {seeDetails ? "Hide Details" : "See Details"}
            <div className="mobileIcon">
              {" "}
              <IoIosInformationCircle />
            </div>
          </SeeDetailsButton>
        </div>
      </SiteName>
      {seeDetails ? (
        <SeeDetails site={site} />
      ) : (
        <>
          <Inventory>
            <Heading as="h4">Inventory</Heading>
            <TableContainer>
              <table key={`inventory-${site._id}`}>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {site.inventory.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </Inventory>
          <CostMakingDetails site={site} />

          <PaymentDetails>
            <Heading as="h4">Payment Details</Heading>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Reciver</th>
                  </tr>
                </thead>
                <tbody>
                  {site.paymentLog.map((payment, index) => (
                    <tr key={index}>
                      <td>{new Date(payment.date).toLocaleDateString()}</td>
                      <td>{payment.amount}</td>
                      <td>{payment.mode}</td>
                      <td>{payment.receiver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </PaymentDetails>
          <UpdateDetails site={site} />
        </>
      )}
    </ModalContainer>
  );
}

export default SiteModal;
