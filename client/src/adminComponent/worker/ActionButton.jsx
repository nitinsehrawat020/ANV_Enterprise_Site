import Attendance from "./Attendance";
import {
  Addworker,
  FloatingIconButton,
  PaymentHistory,
  StyleActionButton,
  UpdatePayment,
} from "./StyleWorker";
import Modal from "../../ui/Modal";
import SpeedDialTooltipOpen from "../../ui/SpeedDial";
import PaymentHistoryModal from "./PaymentHistoryModal";
import UpdatePaymentModal from "./UpdatePaymentModal";
import AddWorkerModal from "./AddWorkerModal";
import { useWorker } from "../../hooks/useWorker";

function ActionButton({ sites }) {
  const { workers, isLoading } = useWorker();
  if (isLoading) return;

  return (
    <>
      <Modal>
        <StyleActionButton>
          <Attendance workers={workers} sites={sites} />

          <Modal.Open opens="updatePayment">
            <UpdatePayment>update payment</UpdatePayment>
          </Modal.Open>
          <Modal.Open opens="paymentHistory">
            <PaymentHistory>Payment History</PaymentHistory>
          </Modal.Open>

          <Modal.Window name="updatePayment">
            <UpdatePaymentModal workerData={workers} />
          </Modal.Window>
          <Modal.Window name="paymentHistory">
            <PaymentHistoryModal workerData={workers} />
          </Modal.Window>
        </StyleActionButton>

        <FloatingIconButton>
          <SpeedDialTooltipOpen />
        </FloatingIconButton>
      </Modal>
    </>
  );
}

export default ActionButton;
