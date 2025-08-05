import styled from "styled-components";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaCalendar,
  FaRupeeSign,
} from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--color-white);
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--color-gray-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  z-index: 1;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: var(--color-black);
  font-size: 24px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--color-dimgray);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-gray-200);
    color: var(--color-black);
  }
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  color: var(--color-orange);
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoLabel = styled.span`
  font-size: 12px;
  color: var(--color-dimgray);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.span`
  font-size: 14px;
  color: var(--color-black);
  font-weight: 500;
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) =>
    props.status === "active"
      ? "var(--color-green-light)"
      : "var(--color-gray-200)"};
  color: ${(props) =>
    props.status === "active" ? "var(--color-green)" : "var(--color-dimgray)"};
  width: fit-content;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
`;

const TableHeader = styled.thead`
  background-color: var(--color-whitesmoke);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-gray-200);

  &:last-child {
    border-bottom: none;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: var(--color-black);
  font-size: 14px;
`;

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: var(--color-black);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
  color: var(--color-dimgray);
  font-style: italic;
`;

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{order.siteName}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {/* Site Information */}
          <Section>
            <SectionTitle>
              <FaMapMarkerAlt />
              Site Information
            </SectionTitle>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Site Name</InfoLabel>
                <InfoValue>{order.siteName}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Work Type</InfoLabel>
                <InfoValue>{order.workType}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Status</InfoLabel>
                <StatusBadge status={order.status}>{order.status}</StatusBadge>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Phone Number</InfoLabel>
                <InfoValue>{order.phoneNumber || "N/A"}</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>{order.address}</InfoValue>
              </InfoItem>
            </InfoGrid>
          </Section>

          {/* Financial Summary */}
          <Section>
            <SectionTitle>
              <FaRupeeSign />
              Financial Summary
            </SectionTitle>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Total Amount Paid</InfoLabel>
                <InfoValue
                  style={{
                    color: "var(--color-orange)",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {order.totalPaid}
                </InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Estimated Project Cost</InfoLabel>
                <InfoValue
                  style={{
                    color: "var(--color-green)",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {order.estimatedCost}
                </InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Payment Transactions</InfoLabel>
                <InfoValue>{order.paymentCount} transactions</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Inventory Items</InfoLabel>
                <InfoValue>{order.inventoryCount} items</InfoValue>
              </InfoItem>
            </InfoGrid>
          </Section>

          {/* Payment History */}
          <Section>
            <SectionTitle>
              <FaCalendar />
              Payment History
            </SectionTitle>
            {order.paymentHistory && order.paymentHistory.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Date</TableHeaderCell>
                    <TableHeaderCell>Amount</TableHeaderCell>
                    <TableHeaderCell>Receiver</TableHeaderCell>
                    <TableHeaderCell>Mode</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {order.paymentHistory.map((payment, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {payment.date
                          ? new Date(payment.date).toLocaleDateString("en-IN")
                          : "No Date"}
                      </TableCell>
                      <TableCell>
                        ₹{payment.amount.toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell>{payment.receiver}</TableCell>
                      <TableCell style={{ textTransform: "capitalize" }}>
                        {payment.mode}
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            ) : (
              <EmptyState>No payment history available</EmptyState>
            )}
          </Section>

          {/* Inventory */}
          <Section>
            <SectionTitle>📦 Inventory</SectionTitle>
            {order.inventory && order.inventory.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Item Name</TableHeaderCell>
                    <TableHeaderCell>Quantity</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {order.inventory.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            ) : (
              <EmptyState>No inventory items available</EmptyState>
            )}
          </Section>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default OrderDetailsModal;
