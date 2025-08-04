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
} from "./styleDesignTemplete";

import { useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";
import useDesignFavorites from "./useDesignFavorites";
import DesignCardItem from "./DesignCardItem";
import DesignDetailModal from "./DesignDetailModal";
import { DESIGN_CATEGORIES } from "./designConstants";

/**
 * Design Template Component
 * Displays design templates with filtering and detail view options
 */
function DesignTemplete({ type, designs }) {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const { isDesignFavorite, handleFavoriteToggle } = useDesignFavorites();

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

        <DesignContainer>
          <DesignFilterContainer>
            <DesignFilter>
              <LiaFilterSolid size={"28"} />
              <DesignFilterSelect id="designFilter">
                {DESIGN_CATEGORIES.map((category) => (
                  <DesignOption key={category} value={category}>
                    {category}
                  </DesignOption>
                ))}
              </DesignFilterSelect>
            </DesignFilter>
          </DesignFilterContainer>

          <CardDesignContainer>
            {designs?.length === 0 ? (
              <div>No design currently available</div>
            ) : (
              designs?.map((design) => (
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
