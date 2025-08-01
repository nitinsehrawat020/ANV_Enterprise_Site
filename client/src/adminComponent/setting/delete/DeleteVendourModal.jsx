import { useState } from "react";
import { StyleModal, Title } from "../add/styleAddModal";
import { useDeleteVendour, useGetVendour } from "../../../hooks/useVendour";
import {
  FormContainer,
  TableContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  DeleteButton,
  PaymentInfo,
  EmptyState,
  ConfirmationOverlay,
  ConfirmationModal,
  ConfirmButton,
  CancelButton,
} from "./styleDeleteModal";

function DeleteVendourModal({ onClick }) {
  const { vendour, isLoading } = useGetVendour();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteVendour, isDeletingVendour } = useDeleteVendour();

  const handleDeleteClick = (vendourItem) => {
    setConfirmDelete(vendourItem);
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      // Simulate API call
      deleteVendour(confirmDelete._id);

      // Close confirmation modal
      setConfirmDelete(null);

      // You might want to refetch the data here or update the local state
    } catch (error) {
      console.error("Error deleting vendour:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  // Format currency for display
  const formatCurrency = (amount) => {
    if (!amount) return "₹0";
    return `₹${parseFloat(amount).toLocaleString("en-IN")}`;
  };

  // Calculate total transactions for a vendour
  const calculateTotalTransactions = (vendourItem) => {
    if (!vendourItem.transactions || !Array.isArray(vendourItem.transactions))
      return 0;
    return vendourItem.transactions.reduce(
      (total, transaction) => total + (transaction.amount || 0),
      0
    );
  };

  // Calculate balance
  const calculateBalance = (vendourItem) => {
    const totalTransactions = calculateTotalTransactions(vendourItem);
    const totalPayments = vendourItem.paymentHistory
      ? vendourItem.paymentHistory.reduce(
          (total, payment) => total + (payment.amount || 0),
          0
        )
      : 0;
    return totalTransactions - totalPayments;
  };

  if (isLoading) {
    return (
      <StyleModal>
        <Title>
          <h2>Delete Vendour</h2>
          <button onClick={onClick}>Close</button>
        </Title>
        <FormContainer>
          <EmptyState>Loading vendours...</EmptyState>
        </FormContainer>
      </StyleModal>
    );
  }

  return (
    <>
      <StyleModal>
        <Title>
          <h2>Delete Vendour</h2>
          <button onClick={onClick}>Close</button>
        </Title>

        <FormContainer>
          {!vendour || vendour.length === 0 ? (
            <EmptyState>
              <p>No vendours found</p>
            </EmptyState>
          ) : (
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Vendour Name</TableHeaderCell>
                    <TableHeaderCell>Payment Info</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {vendour.map((vendourItem, index) => (
                    <TableRow key={vendourItem._id || index}>
                      <TableCell>
                        <strong>{vendourItem.name || "Unknown Vendour"}</strong>
                      </TableCell>
                      <TableCell>
                        <PaymentInfo>
                          <div className="amount">
                            Total:{" "}
                            {formatCurrency(vendourItem.payment.totalBalance)}
                          </div>
                          <div className="status">
                            {vendourItem.transaction?.length || 0}{" "}
                            transaction(s)
                          </div>
                          <div
                            style={{
                              fontSize: "0.7rem",
                              color:
                                calculateBalance(vendourItem) >= 0
                                  ? "var(--color-green-400)"
                                  : "var(--color-red-400)",
                            }}
                          >
                            Balance:{" "}
                            {formatCurrency(calculateBalance(vendourItem))}
                          </div>
                        </PaymentInfo>
                      </TableCell>
                      <TableCell>
                        <DeleteButton
                          onClick={() => handleDeleteClick(vendourItem)}
                          disabled={isDeleting || isDeletingVendour}
                        >
                          Delete
                        </DeleteButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          )}
        </FormContainer>
      </StyleModal>

      {/* Confirmation Modal */}
      {confirmDelete && (
        <ConfirmationOverlay onClick={handleCancelDelete}>
          <ConfirmationModal onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete vendour &ldquo;
              {confirmDelete.name}&rdquo;?
              <br />
              This action cannot be undone and will remove all transaction
              history.
            </p>
            <div className="button-group">
              <CancelButton onClick={handleCancelDelete}>Cancel</CancelButton>
              <ConfirmButton
                onClick={handleConfirmDelete}
                disabled={isDeleting || isDeletingVendour}
              >
                {isDeleting || isDeletingVendour ? "Deleting..." : "Delete"}
              </ConfirmButton>
            </div>
          </ConfirmationModal>
        </ConfirmationOverlay>
      )}
    </>
  );
}

export default DeleteVendourModal;
