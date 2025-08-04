import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import {
  DesignCard,
  DesignImage,
  FavoriteButton,
  CardDetails,
  CardInfo,
  CardHeading,
  CardDesc,
  CardButton,
} from "./styleDesignTemplete";

/**
 * Design Card Component
 * @param {Object} design - The design object to display
 * @param {Function} handleViewDetails - Function to view design details
 * @param {Function} isDesignFavorite - Function to check if design is favorite
 * @param {Function} handleFavoriteToggle - Function to toggle favorite status
 * @returns {JSX.Element} Design card component
 */
const DesignCardItem = ({
  design,
  handleViewDetails,
  isDesignFavorite,
  handleFavoriteToggle,
}) => {
  const designId = design.id || design._id;
  const isFavorite = isDesignFavorite(designId);
  const imageUrl =
    design.images && design.images.length > 0 ? design.images[0] : design.image;

  return (
    <DesignCard key={designId}>
      <DesignImage img={imageUrl}>
        <FavoriteButton
          onClick={(e) => handleFavoriteToggle(design, e)}
          $isFavorite={isFavorite}
        >
          {isFavorite ? <MdFavorite /> : <GrFavorite />}
        </FavoriteButton>
        <p>{design.designArea}</p>
      </DesignImage>
      <CardDetails>
        <CardInfo>
          <CardHeading>{design.title}</CardHeading>
          <CardDesc>{design.description}</CardDesc>
        </CardInfo>
        <CardButton onClick={() => handleViewDetails(design)}>
          View Details
        </CardButton>
      </CardDetails>
    </DesignCard>
  );
};

export default DesignCardItem;
