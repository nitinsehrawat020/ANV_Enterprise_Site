import { useState } from "react";
import {
  CardContainer,
  CardInformation,
  StyleCard,
} from "./styleDesignFalseCeil";
import Modal from "../../ui/Modal";
import DesignInformation from "./DesignInformation";

function DesignCard({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleCardClick(item) {
    setSelectedItem(item);
  }

  function closeOverlay() {
    setSelectedItem(null);
  }
  return (
    <>
      <Modal>
        <CardContainer>
          {data.map((item, index) => (
            <Modal.Open open="DesignCard" key={index}>
              <StyleCard img={item.img} onClick={() => handleCardClick(item)}>
                <CardInformation>
                  <h3>{item.title}</h3>|<p>{item.designArea}</p>
                </CardInformation>
              </StyleCard>
            </Modal.Open>
          ))}
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
