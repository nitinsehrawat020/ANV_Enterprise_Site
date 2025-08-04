import { MdFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";
import {
  StyleFavorite,
  CardButton,
  CardDesc,
  CardDesignContainer,
  CardDetails,
  CardHeading,
  CardInfo,
  DesignCard,
  DesignContainer,
  DesignFilter,
  DesignFilterContainer,
  DesignImage,
  FavoriteButton,
  HeadingImage,
  HeadingPara,
  HeadingTitle,
} from "../../component/favorite/styleFavorite";
import useFavoriteDesign from "../../hooks/useFavoriteDesign";
import DesignDetailModal from "../../component/design/DesignDetailModal";

function Favorite() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const {
    favDesigns: designs,
    isDesignFavorite,
    handleFavoriteToggle,
  } = useFavoriteDesign();

  // Handle view details
  const handleViewDetails = (design) => {
    setSelectedDesign(design);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedDesign(null);
  };
  return (
    <StyleFavorite>
      <HeadingImage>
        <HeadingTitle>Your Favorite Design</HeadingTitle>
      </HeadingImage>

      <DesignContainer>
        <CardDesignContainer>
          {designs?.length === 0 ? (
            <div>No design currently available</div>
          ) : (
            designs?.map((design) => (
              <DesignCard key={design.id || design._id}>
                <DesignImage img={design.images[0]}>
                  <FavoriteButton
                    onClick={(e) => handleFavoriteToggle(design, e)}
                    $isFavorite={isDesignFavorite(design.id || design._id)}
                  >
                    {isDesignFavorite(design.id || design._id) ? (
                      <MdFavorite />
                    ) : (
                      <GrFavorite />
                    )}
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
            ))
          )}
        </CardDesignContainer>
      </DesignContainer>

      {/* Design Details Modal */}
      {selectedDesign && (
        <DesignDetailModal
          selectedDesign={selectedDesign}
          handleCloseModal={handleCloseModal}
          isDesignFavorite={isDesignFavorite}
          handleFavoriteToggle={handleFavoriteToggle}
        />
      )}
    </StyleFavorite>
  );
}

export default Favorite;
