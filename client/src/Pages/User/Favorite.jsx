import { MdFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  DesignImage,
  FavoriteButton,
  HeadingImage,
  HeadingTitle,
} from "../../component/favorite/styleFavorite";
import useFavoriteDesign from "../../hooks/useFavoriteDesign";
import DesignDetailModal from "../../component/design/DesignDetailModal";
import { useUser } from "../../component/LoginAndSignup/useUser";
import Button from "../../ui/Button";

function Favorite() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
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

  // Handle login navigation
  const handleLoginClick = () => {
    navigate("/login");
  };

  // If user is not authenticated, show login prompt
  if (!isAuthenticated) {
    return (
      <StyleFavorite>
        <HeadingImage>
          <HeadingTitle>Your Favorite Design</HeadingTitle>
        </HeadingImage>
        <DesignContainer>
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h3 style={{ color: "var(--color-dimgray)", marginBottom: "10px" }}>
              Please Login to View Your Favorites
            </h3>
            <p style={{ color: "var(--color-gray)", marginBottom: "20px" }}>
              Login to add and see your favorite designs. Build your collection
              of inspiring interior designs!
            </p>
            <Button onClick={handleLoginClick} variation="filled">
              Sign Up Now
            </Button>
          </div>
        </DesignContainer>
      </StyleFavorite>
    );
  }

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
