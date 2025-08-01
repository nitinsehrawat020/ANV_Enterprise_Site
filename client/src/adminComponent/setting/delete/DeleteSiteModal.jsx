import { useState } from "react";
import { StyleModal, Title } from "../add/styleAddModal";
import { useDeleteSite, useSite } from "../../../hooks/useSite";
import {
  FormContainer,
  TableContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  DeleteButton,
  StatusBadge,
  PaymentInfo,
  EmptyState,
  ConfirmationOverlay,
  ConfirmationModal,
  ConfirmButton,
  CancelButton,
} from "./styleDeleteModal";

function DeleteSiteModal({ onClick }) {
  const { sites, isLoading } = useSite();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteSite, isDeletingSite } = useDeleteSite();

  const handleDeleteClick = (site) => {
    setConfirmDelete(site);
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      // Add your delete API call here
      console.log("Deleting site:", confirmDelete);

      // Simulate API call
      deleteSite(confirmDelete._id);

      // Close confirmation modal
      setConfirmDelete(null);

      // You might want to refetch the data here or update the local state
    } catch (error) {
      console.error("Error deleting site:", error);
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

  // Calculate total payment for a site
  const calculateTotalPayment = (site) => {
    // Use paymentDetails.totalPayment if available, otherwise calculate from paymentLog
    if (site.paymentDetails?.totalPayment) {
      return parseFloat(site.paymentDetails.totalPayment) || 0;
    }

    if (!site.paymentLog || !Array.isArray(site.paymentLog)) return 0;
    return site.paymentLog.reduce(
      (total, payment) => total + (payment.amount || 0),
      0
    );
  };

  if (isLoading) {
    return (
      <StyleModal>
        <Title>
          <h2>Delete Site</h2>
          <button onClick={onClick}>Close</button>
        </Title>
        <FormContainer>
          <EmptyState>Loading sites...</EmptyState>
        </FormContainer>
      </StyleModal>
    );
  }

  return (
    <>
      <StyleModal>
        <Title>
          <h2>Delete Site</h2>
          <button onClick={onClick}>Close</button>
        </Title>

        <FormContainer>
          {!sites || sites.length === 0 ? (
            <EmptyState>
              <p>No sites found</p>
            </EmptyState>
          ) : (
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Site Name</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Work Progress</TableHeaderCell>
                    <TableHeaderCell>Payment Info</TableHeaderCell>
                    <TableHeaderCell>Location</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {sites.map((site, index) => (
                    <TableRow key={site._id || index}>
                      <TableCell>
                        <strong>{site.name || "Untitled Site"}</strong>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--color-grey-300)",
                            marginTop: "0.2rem",
                          }}
                        >
                          {site.workType || "N/A"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge active={site.status === "active"}>
                          {site.status === "active" ? "Active" : "Inactive"}
                        </StatusBadge>
                      </TableCell>
                      <TableCell>
                        <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                          {site.workProgress || 0}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <PaymentInfo>
                          <div className="amount">
                            {formatCurrency(
                              site.paymentDetails?.totalPayment ||
                                calculateTotalPayment(site)
                            )}
                          </div>
                          <div className="status">
                            {site.paymentLog?.length || 0} payment(s)
                          </div>
                          {site.paymentDetails?.remainingPayment && (
                            <div
                              style={{
                                fontSize: "0.7rem",
                                color: "var(--color-red-400)",
                              }}
                            >
                              Remaining:{" "}
                              {formatCurrency(
                                site.paymentDetails.remainingPayment
                              )}
                            </div>
                          )}
                        </PaymentInfo>
                      </TableCell>
                      <TableCell>{site.address || "N/A"}</TableCell>
                      <TableCell>
                        <DeleteButton
                          onClick={() => handleDeleteClick(site)}
                          disabled={isDeleting || isDeletingSite}
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
              Are you sure you want to delete &ldquo;
              {confirmDelete.name}&rdquo;?
              <br />
              This action cannot be undone and will remove all associated data.
            </p>
            <div className="button-group">
              <CancelButton onClick={handleCancelDelete}>Cancel</CancelButton>
              <ConfirmButton
                onClick={handleConfirmDelete}
                disabled={isDeleting || isDeletingSite}
              >
                {isDeleting || isDeletingSite ? "Deleting..." : "Delete"}
              </ConfirmButton>
            </div>
          </ConfirmationModal>
        </ConfirmationOverlay>
      )}
    </>
  );
}

export default DeleteSiteModal;
