import { useCallback } from "react";
import {
  useFavDesign,
  useAddFavDesign,
  useRemoveFavDesign,
} from "../../hooks/useDesign";

/**
 * Custom hook for design favorites management
 * @returns {Object} Favorites related functions and states
 */
export const useDesignFavorites = () => {
  const { favDesigns } = useFavDesign();
  const { addFavDesign } = useAddFavDesign();
  const { removeFavDesign } = useRemoveFavDesign();

  // Check if a design is in favorites
  const isDesignFavorite = useCallback(
    (designId) => {
      return favDesigns?.some(
        (favDesign) => (favDesign.id || favDesign._id) === designId
      );
    },
    [favDesigns]
  );

  // Handle favorite toggle
  const handleFavoriteToggle = useCallback(
    (design, e) => {
      e?.preventDefault();
      e?.stopPropagation();

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

export default useDesignFavorites;
