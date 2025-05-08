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

function ActionButton({ WorkerData, sites }) {
  return (
    <>
      <Modal>
        <StyleActionButton>
          <Attendance WorkerData={WorkerData} sites={sites} />

          <Modal.Open opens="updatePayment">
            <UpdatePayment>update payment</UpdatePayment>
          </Modal.Open>
          <Modal.Open opens="paymentHistory">
            <PaymentHistory>Payment History</PaymentHistory>
          </Modal.Open>
          <Modal.Open opens="addWorker">
            <Addworker>Add worker</Addworker>
          </Modal.Open>

          <Modal.Window name="updatePayment">
            <UpdatePaymentModal workerData={WorkerData} />
          </Modal.Window>
          <Modal.Window name="paymentHistory">
            <PaymentHistoryModal workerData={WorkerData} />
          </Modal.Window>
          <Modal.Window name="addWorker">
            <AddWorkerModal workerData={WorkerData} />
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
