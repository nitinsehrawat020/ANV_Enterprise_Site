import { useState, useMemo } from "react"; // Import useMemo
import {
  CardContainer,
  CardInformation,
  GroupDiv,
  ImageContainerCard,
  StyleCard,
} from "./styleDesignFalseCeil";
import Modal from "../../ui/Modal";
import DesignInformation from "./DesignInformation";
import Spinner from "../../ui/Spinner";
import { useUser } from "../LoginAndSignup/useUser";
import { FaHeart } from "react-icons/fa6";
import { useAddFavDesign, useFalseCeil, useRemoveFavDesign } from "./useDesign";
import toast from "react-hot-toast";

function DesignCard() {
  const { data, isLoading } = useFalseCeil();

  const [selectedItem, setSelectedItem] = useState(null);
  const { user, isLoading: isLoadingUser } = useUser();
  const { addFavDesign } = useAddFavDesign();
  const { removeFavDesign } = useRemoveFavDesign();

  const favoriteDesignIds = useMemo(() => {
    return new Set(user?.favDesign?.map((id) => String(id)) || []);
  }, [user?.favDesign]);

  function handleFavClick(e, itemId) {
    e.stopPropagation();
    const isFavorite = user && favoriteDesignIds.has(String(itemId));

    if (!user) {
      toast.error("Kindly login to add to fav");
      return;
    }
    if (!isFavorite) {
      console.log("hii");
      addFavDesign(itemId);
    } else {
      removeFavDesign(itemId);
    }
  }

  function handleCardClick(item) {
    setSelectedItem(item);
  }

  function closeOverlay() {
    setSelectedItem(null);
  }

  if (isLoading || isLoadingUser) {
    return <Spinner />;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No designs to display.</div>;
  }

  return (
    <>
      <Modal>
        <CardContainer>
          {data.map((item) => {
            const isFavorite = user && favoriteDesignIds.has(String(item._id));

            return (
              <Modal.Open open="DesignCard" key={item._id}>
                <StyleCard>
                  <ImageContainerCard image={item.image} />
                  <CardInformation onClick={() => handleCardClick(item)}>
                    <GroupDiv>
                      <h3> {item.title}</h3>
                      <p>{item.designArea}</p>
                    </GroupDiv>
                    <FaHeart
                      color={isFavorite ? "#6c9eca" : "white"}
                      size={20}
                      onClick={(e) => handleFavClick(e, item._id)}
                    />
                  </CardInformation>
                </StyleCard>
              </Modal.Open>
            );
          })}
        </CardContainer>

        {selectedItem && (
          <Modal.Window open="DesignCard" onClose={closeOverlay}>
            <DesignInformation selectedItem={selectedItem} />
          </Modal.Window>
        )}
      </Modal>
    </>
  );
}

export default DesignCard;
