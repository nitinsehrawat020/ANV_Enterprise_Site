import { useCallback } from "react";
import { useAddFavDesign, useFavDesign, useRemoveFavDesign } from "./useDesign";

/**
 * Custom hook for managing favorite designs
 * @returns {Object} Methods and data for favorite design management
 */
const useFavoriteDesign = () => {
  const { favDesigns } = useFavDesign();
  const { addFavDesign } = useAddFavDesign();
  const { removeFavDesign } = useRemoveFavDesign();

  /**
   * Check if a design is in favorites
   * @param {string} designId - The ID of the design to check
   * @returns {boolean} True if the design is in favorites
   */
  const isDesignFavorite = useCallback(
    (designId) => {
      return favDesigns?.some(
        (favDesign) => (favDesign.id || favDesign._id) === designId
      );
    },
    [favDesigns]
  );

  /**
   * Handle toggling the favorite status of a design
   * @param {Object} design - The design object
   * @param {Event} e - The event object
   */
  const handleFavoriteToggle = useCallback(
    (design, e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      const designId = design.id || design._id;

      if (isDesignFavorite(designId)) {
        removeFavDesign(designId);
      } else {
        addFavDesign(designId);
      }
    },
    [isDesignFavorite, addFavDesign, removeFavDesign]
  );

  return {
    favDesigns,
    isDesignFavorite,
    handleFavoriteToggle,
  };
};

export default useFavoriteDesign;
