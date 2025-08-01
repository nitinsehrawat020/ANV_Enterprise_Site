import styled from "styled-components";

// Override FormContainer to remove scrolling conflicts
export const FormContainer = styled.div`
  max-height: none;
  overflow: visible;
  padding: 0.8rem;
  width: 100%;
  margin-top: 0.3rem;

  @media (max-width: 768px) {
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
  }
`;

// Styled components for the table
export const TableContainer = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 1rem 0;
  border: 1px solid var(--color-background-300);
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 45vh;
    margin: 0.5rem 0;
    overflow-x: auto;
  }

  @media (max-width: 480px) {
    max-height: 40vh;
    border-radius: 6px;
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-background-100);

  @media (max-width: 768px) {
    min-width: 500px;
  }

  @media (max-width: 480px) {
    min-width: 400px;
  }
`;

export const TableHeader = styled.thead`
  background: var(--color-background-200);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem 0.8rem;
  text-align: left;
  font-weight: 600;
  color: var(--color-grey-50);
  border-bottom: 2px solid var(--color-background-300);
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 1024px) {
    padding: 0.8rem 0.6rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.4rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.2rem;
    font-size: 0.75rem;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-background-300);
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-background-50) !important;
  }

  &:nth-child(even) {
    background: var(--color-background-75);
  }
`;

export const TableCell = styled.td`
  padding: 0.8rem;
  color: var(--color-grey-100);
  vertical-align: middle;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    width: 80px;
    max-width: 80px;
  }

  &:last-child {
    width: 100px;
    max-width: 100px;
    text-align: center;
  }

  @media (max-width: 1024px) {
    padding: 0.6rem 0.5rem;
    font-size: 0.9rem;
    max-width: 150px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.3rem;
    font-size: 0.8rem;
    white-space: normal;
    max-width: none;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.2rem;
    font-size: 0.75rem;
  }
`;

export const DesignImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--color-background-300);
  display: block;

  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const DeleteButton = styled.button`
  background: var(--color-red-500);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: var(--color-red-600);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: var(--color-grey-400);
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 1024px) {
    padding: 0.45rem 0.8rem;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.35rem 0.5rem;
    font-size: 0.65rem;
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--color-primary-500);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.15rem 0.3rem;
    font-size: 0.65rem;
    border-radius: 8px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${(props) =>
    !props.status ? "var(--color-green-500,green)" : "var(--color-red-500)"};
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.15rem 0.3rem;
    font-size: 0.65rem;
    border-radius: 8px;
  }
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.8rem;

  .amount {
    font-weight: 600;
    color: var(--color-green-400);
  }

  .status {
    font-size: 0.7rem;
    color: var(--color-grey-300);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;

    .amount {
      font-size: 0.8rem;
    }

    .status {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;

    .amount {
      font-size: 0.75rem;
    }

    .status {
      font-size: 0.6rem;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-grey-300);
  font-size: 1rem;
`;

// Confirmation Modal Styles
export const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ConfirmationModal = styled.div`
  background: var(--color-background-200);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--color-background-400);
  max-width: 400px;
  width: 90%;
  text-align: center;

  h3 {
    color: var(--color-grey-50);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: var(--color-grey-200);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
`;

export const ConfirmButton = styled.button`
  background: var(--color-red-500);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-red-600);
  }

  &:disabled {
    background: var(--color-grey-400);
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background: var(--color-grey-500);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-grey-600);
  }
`;
