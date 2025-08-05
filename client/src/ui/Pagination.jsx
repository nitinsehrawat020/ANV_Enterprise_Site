import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { device } from "../Styles/Theme";

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.mobile} {
    gap: 5px;
  }
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-gray-200);
  background-color: ${(props) =>
    props.$isActive ? "var(--color-orange)" : "var(--color-white)"};
  color: ${(props) =>
    props.$isActive ? "var(--color-white)" : "var(--color-black)"};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "var(--color-orange)" : "var(--color-whitesmoke)"};
    border-color: var(--color-orange);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-gray-200);
    }
  }

  @media ${device.mobile} {
    width: 35px;
    height: 35px;
    font-size: 13px;
  }
`;

const NavButton = styled(PageButton)`
  width: 45px;
  background-color: var(--color-white);
  color: var(--color-orange);
  border-color: var(--color-orange);

  &:hover:not(:disabled) {
    background-color: var(--color-orange);
    color: var(--color-white);
  }

  @media ${device.mobile} {
    width: 40px;
  }
`;

const PageInfo = styled.div`
  font-size: 14px;
  color: var(--color-dimgray);
  text-align: center;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const Ellipsis = styled.span`
  padding: 0 5px;
  color: var(--color-dimgray);
  font-weight: bold;
`;

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showInfo = false,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const generatePageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    // Calculate start and end of visible page range
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    // Generate the range of page numbers
    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    // Add first page and ellipsis if needed
    if (start > 1) {
      rangeWithDots.push(1);
      if (start > 2) {
        rangeWithDots.push("...");
      }
    }

    // Add the main range
    rangeWithDots.push(...range);

    // Add last page and ellipsis if needed
    if (end < totalPages) {
      if (end < totalPages - 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = generatePageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Always show pagination if there are items, even for single page
  if (totalItems === 0) return null;

  return (
    <PaginationWrapper>
      <PaginationControls>
        {/* Previous Button */}
        <NavButton
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          title="Previous page"
        >
          <FaChevronLeft />
        </NavButton>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
          ) : (
            <PageButton
              key={page}
              $isActive={page === currentPage}
              onClick={() => handlePageClick(page)}
              title={`Go to page ${page}`}
            >
              {page}
            </PageButton>
          )
        )}

        {/* Next Button */}
        <NavButton
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          title="Next page"
        >
          <FaChevronRight />
        </NavButton>
      </PaginationControls>

      {/* Page Info */}
      {showInfo && (
        <PageInfo>
          Showing {startItem}-{endItem} of {totalItems} designs
        </PageInfo>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
