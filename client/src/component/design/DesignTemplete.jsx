import {
  StyleDesignTemplete,
  HeadingImage,
  HeadingTitle,
  HeadingPara,
  DesignContainer,
  DesignFilterContainer,
  DesignFilter,
  DesignFilterSelect,
  DesignOption,
  CardDesignContainer,
  PaginationContainer,
} from "./styleDesignTemplete";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LiaFilterSolid } from "react-icons/lia";
import useDesignFavorites from "./useDesignFavorites";
import DesignCardItem from "./DesignCardItem";
import DesignDetailModal from "./DesignDetailModal";
import { DESIGN_CATEGORIES } from "./designConstants";
import useMediaQuery from "../../hooks/useMediaQuery";
import Pagination from "../../ui/Pagination";
import { capitalizeFirstLetter } from "../../util/helper";

/**
 * Design Template Component
 * Displays design templates with filtering and detail view options
 */
function DesignTemplete({ type, designs }) {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDesignFavorite, handleFavoriteToggle } = useDesignFavorites();

  // Get current filter from URL or default to "All Category"
  const currentFilter = searchParams.get("category") || "All Category";

  // Filter designs based on selected category
  const filteredDesigns = useMemo(() => {
    if (!designs) return [];
    if (currentFilter === "All Category") return designs;

    return designs.filter((design) => {
      // Check if design has a category property that matches the filter
      return (
        design.designArea === currentFilter ||
        design.type === currentFilter ||
        design.roomType === currentFilter
      );
    });
  }, [designs, currentFilter]);

  // Responsive design counts
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Determine designs per page based on screen size
  const designsPerPage = useMemo(() => {
    if (isMobile || isTablet) return 5;
    return 6; // Desktop and laptop
  }, [isMobile, isTablet]);

  // Calculate pagination based on filtered designs
  const totalDesigns = filteredDesigns?.length || 0;
  const totalPages = Math.ceil(totalDesigns / designsPerPage);
  const startIndex = (currentPage - 1) * designsPerPage;
  const endIndex = startIndex + designsPerPage;
  const currentDesigns = filteredDesigns?.slice(startIndex, endIndex) || [];

  // Handle filter change
  const handleFilterChange = (category) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === "All Category") {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", category);
    }
    setSearchParams(newSearchParams);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of design container
    document.getElementById("design-container")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [currentFilter]);

  // Handle view details
  const handleViewDetails = (design) => {
    setSelectedDesign(design);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedDesign(null);
  };

  return (
    <>
      <StyleDesignTemplete>
        <HeadingImage>
          <HeadingTitle>{type}</HeadingTitle>
          <HeadingPara>
            Your search for the perfect POP {type} design to enhance your dream
            home ends here. Simply choose a design, sit back with a cup of tea,
            and let us work our magic. Explore a wide variety of styles tailored
            to your needs—use the category filters to easily find exactly what
            you&#39;re looking for.
          </HeadingPara>
        </HeadingImage>

        <DesignContainer id="design-container">
          <DesignFilterContainer>
            <DesignFilter>
              <LiaFilterSolid size={"28"} />
              <DesignFilterSelect
                id="designFilter"
                value={currentFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                {DESIGN_CATEGORIES.map((category) => (
                  <DesignOption key={category} value={category}>
                    {capitalizeFirstLetter(category)}
                  </DesignOption>
                ))}
              </DesignFilterSelect>
            </DesignFilter>
          </DesignFilterContainer>

          <CardDesignContainer>
            {totalDesigns === 0 ? (
              <div>No design currently available</div>
            ) : (
              currentDesigns.map((design) => (
                <DesignCardItem
                  key={design.id || design._id}
                  design={design}
                  handleViewDetails={handleViewDetails}
                  isDesignFavorite={isDesignFavorite}
                  handleFavoriteToggle={handleFavoriteToggle}
                />
              ))
            )}
          </CardDesignContainer>

          {/* Pagination */}
          {totalDesigns > 0 && (
            <PaginationContainer>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.max(1, totalPages)}
                onPageChange={handlePageChange}
                showInfo={true}
                totalItems={totalDesigns}
                itemsPerPage={designsPerPage}
              />
            </PaginationContainer>
          )}
        </DesignContainer>
      </StyleDesignTemplete>

      {/* Design Details Modal */}
      {selectedDesign && (
        <DesignDetailModal
          selectedDesign={selectedDesign}
          handleCloseModal={handleCloseModal}
          isDesignFavorite={isDesignFavorite}
          handleFavoriteToggle={handleFavoriteToggle}
        />
      )}
    </>
  );
}

export default DesignTemplete;
