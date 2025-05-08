import { capitalizeFirstLetter } from "../../util/helper";
import { InnerBox, VendoursBox } from "./StyleVendours";
import Modal from "../../ui/Modal";
import VendourModal from "./VendourModal";

function VendourDetails({ vendour }) {
  console.log(vendour);

  return (
    <Modal>
      <Modal.Open open="vendourCard">
        <VendoursBox>
          <InnerBox>
            <h3>{capitalizeFirstLetter(vendour.name)}</h3>
            <p>Phone: {vendour.phoneNumber}</p>
          </InnerBox>
        </VendoursBox>
      </Modal.Open>

      <Modal.Window open="vendourCard">
        <VendourModal vendour={vendour} />
      </Modal.Window>
    </Modal>
  );
}

export default VendourDetails;
