import { createPortal } from "react-dom";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import DesignCarousel from "./DesignCarousel";
import { DEFAULT_DESCRIPTION, DEFAULT_RATING } from "./designConstants";
import {
  DesignModalOverlay,
  DesignModalContainer,
  DesignModalCloseButton,
  ModalCarouselContainer,
  DesignDetailsContent,
  DesignTitle,
  DesignMeta,
  DesignCategory,
  DesignRating,
  StarRating,
  DesignDescription,
  ModalActionButtons,
  ModalFavoriteButton,
  ModalRequestButton,
} from "./styleDesignTemplete";

/**
 * Design Detail Modal Component
 * @param {Object} selectedDesign - The design object to display
 * @param {Function} handleCloseModal - Function to close the modal
 * @param {Function} isDesignFavorite - Function to check if design is favorite
 * @param {Function} handleFavoriteToggle - Function to toggle favorite status
 * @returns {JSX.Element} Modal component
 */
const DesignDetailModal = ({
  selectedDesign,
  handleCloseModal,
  isDesignFavorite,
  handleFavoriteToggle,
}) => {
  if (!selectedDesign) return null;

  return createPortal(
    <DesignModalOverlay onClick={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <DesignModalContainer>
          <DesignModalCloseButton onClick={handleCloseModal}>
            ×
          </DesignModalCloseButton>

          <ModalCarouselContainer>
            <DesignCarousel
              images={
                Array.isArray(selectedDesign.images)
                  ? selectedDesign.images
                  : selectedDesign.image
                  ? [selectedDesign.image]
                  : []
              }
            />
          </ModalCarouselContainer>

          <DesignDetailsContent>
            <DesignTitle>{selectedDesign.title}</DesignTitle>

            <DesignMeta>
              <DesignCategory>
                {selectedDesign.category || "POP"}
              </DesignCategory>
              <DesignRating>
                <StarRating>
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index <
                      Math.floor(selectedDesign.rating || DEFAULT_RATING)
                        ? "★"
                        : "☆"}
                    </span>
                  ))}
                </StarRating>
                <span>({selectedDesign.rating || DEFAULT_RATING})</span>
              </DesignRating>
            </DesignMeta>

            <DesignDescription>
              {selectedDesign.description || DEFAULT_DESCRIPTION}
            </DesignDescription>

            <ModalActionButtons>
              <ModalFavoriteButton
                $isFavorite={isDesignFavorite(
                  selectedDesign.id || selectedDesign._id
                )}
                onClick={(e) => handleFavoriteToggle(selectedDesign, e)}
              >
                {isDesignFavorite(selectedDesign.id || selectedDesign._id) ? (
                  <MdFavorite />
                ) : (
                  <GrFavorite />
                )}
                <span>
                  {isDesignFavorite(selectedDesign.id || selectedDesign._id)
                    ? "Remove Favorite"
                    : "Add to Favorites"}
                </span>
              </ModalFavoriteButton>

              <ModalRequestButton>Request This Design</ModalRequestButton>
            </ModalActionButtons>
          </DesignDetailsContent>
        </DesignModalContainer>
      </div>
    </DesignModalOverlay>,
    document.body
  );
};

export default DesignDetailModal;
