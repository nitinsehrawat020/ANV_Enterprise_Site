import { useState } from "react";
import { StyleModal, Title } from "../add/styleAddModal";
import {
  useDeleteDesign,
  useFalseCeil,
  useMolding,
} from "../../../hooks/useDesign";
import {
  FormContainer,
  TableContainer,
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  DesignImage,
  DeleteButton,
  CategoryBadge,
  EmptyState,
  ConfirmationOverlay,
  ConfirmationModal,
  ConfirmButton,
  CancelButton,
} from "./styleDeleteModal";

function DeleteDesignModal({ onClick }) {
  const { moldingDesigns, isMoldingLoading } = useMolding();
  const { falseCeilDesigns, isFalseceilLoading } = useFalseCeil();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteDesign } = useDeleteDesign();

  // Combine all designs into one array
  const allDesigns = [
    ...(moldingDesigns?.map((design) => ({
      ...design,
      designType: "Molding",
    })) || []),
    ...(falseCeilDesigns?.map((design) => ({
      ...design,
      designType: "False Ceiling",
    })) || []),
  ];
  console.log(moldingDesigns, falseCeilDesigns);

  const handleDeleteClick = (design) => {
    setConfirmDelete(design);
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      // Add your delete API call here
      console.log("Deleting design:", confirmDelete);

      // Simulate API call
      deleteDesign(confirmDelete._id);

      // Close confirmation modal
      setConfirmDelete(null);

      // You might want to refetch the data here or update the local state
    } catch (error) {
      console.error("Error deleting design:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  if (isFalseceilLoading || isMoldingLoading) {
    return (
      <StyleModal>
        <Title>
          <h2>Delete Design</h2>
          <button onClick={onClick}>Close</button>
        </Title>
        <FormContainer>
          <EmptyState>Loading designs...</EmptyState>
        </FormContainer>
      </StyleModal>
    );
  }
  console.log(allDesigns);

  return (
    <>
      <StyleModal>
        <Title>
          <h2>Delete Design</h2>
          <button onClick={onClick}>Close</button>
        </Title>

        <FormContainer>
          {allDesigns.length === 0 ? (
            <EmptyState>
              <p>No designs found</p>
            </EmptyState>
          ) : (
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Image</TableHeaderCell>
                    <TableHeaderCell>Design Name</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Area</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {allDesigns.map((design, index) => (
                    <TableRow key={design.id || index}>
                      <TableCell>
                        <DesignImage
                          src={
                            (design.images && design.images.length > 0
                              ? design.images[0]
                              : null) ||
                            design.imageUrl ||
                            "/placeholder-image.jpg"
                          }
                          alt={design.title || design.name}
                          onError={(e) => {
                            e.target.src = "/placeholder-image.jpg";
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <strong>
                          {design.title || design.name || "Untitled"}
                        </strong>
                      </TableCell>
                      <TableCell>
                        <CategoryBadge>{design.designArea}</CategoryBadge>
                      </TableCell>
                      <TableCell>
                        {design.designArea || design.area || "N/A"}
                      </TableCell>
                      <TableCell>
                        <DeleteButton
                          onClick={() => handleDeleteClick(design)}
                          disabled={isDeleting}
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
              {confirmDelete.title || confirmDelete.name}&rdquo;?
              <br />
              This action cannot be undone.
            </p>
            <div className="button-group">
              <CancelButton onClick={handleCancelDelete}>Cancel</CancelButton>
              <ConfirmButton
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </ConfirmButton>
            </div>
          </ConfirmationModal>
        </ConfirmationOverlay>
      )}
    </>
  );
}

export default DeleteDesignModal;
