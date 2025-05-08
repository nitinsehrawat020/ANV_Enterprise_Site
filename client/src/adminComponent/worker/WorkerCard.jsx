import { useState } from "react";
import Heading from "../../ui/Heading";
import {
  Dropdown,
  DropdownButton,
  Information,
  InnerBorder,
  LastPayment,
  Name_Profile,
  Number,
  Span,
  StyledWorkerCard,
  Switch,
} from "./StyleWorker";

import { CgMoreVertical } from "react-icons/cg";
import { useOutsideClick } from "../../hooks/useOutsideClick,js";
import Modal from "../../ui/Modal";
import WorkerDetailsModal from "./WorkerDetailsModal";

function WorkerCard({ worker }) {
  const [overlay, setOverlay] = useState(false);
  const ref = useOutsideClick(() => setOverlay(false));

  // Separate handler for the dropdown toggle to prevent event propagation
  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // This is the key line - stops the click from bubbling up
    setOverlay((prev) => !prev);
  };

  return (
    <Modal>
      <Modal.Open opens="workerCard">
        <StyledWorkerCard>
          <InnerBorder>
            {/* Use the new handler that stops propagation */}
            <Switch onClick={handleDropdownToggle}>
              <CgMoreVertical />
            </Switch>

            <Dropdown overlay={overlay} ref={ref}>
              <DropdownButton
                onClick={(e) => {
                  e.stopPropagation(); // Also prevent this click from opening the modal
                  toggleWorkerStatus(worker);
                  handleDropdownToggle();
                }}
              >
                change to {getWorkerStatusText(worker)}
              </DropdownButton>
            </Dropdown>

            <Name_Profile>
              <Heading as="h3">{worker?.name}</Heading>
              {worker?.member_type}
            </Name_Profile>
            <LastPayment>
              Last Paid{" "}
              <Span>{getLastPaymentDate(worker) || "Not paid yet"}</Span>
            </LastPayment>
            <Number>
              <Information color="yellow">
                Total Salary:- <Span>{worker?.payment.totalSalery}</Span>
              </Information>
            </Number>

            <Number>
              <Information color="red">
                Wednesday <Span>{worker?.payment.weeklyGiven}</Span>
              </Information>
              <Information color="red">
                Advance<Span>{worker?.payment.advance}</Span>
              </Information>
            </Number>
            <Information color="green">
              Remaining Balance:- <Span>{worker?.payment.due}</Span>
            </Information>
          </InnerBorder>
        </StyledWorkerCard>
      </Modal.Open>
      <Modal.Window name="workerCard">
        <WorkerDetailsModal worker={worker} />
      </Modal.Window>
    </Modal>
  );
}

function toggleWorkerStatus(worker) {
  worker.active_status = !worker.active_status;
}

function getWorkerStatusText(worker) {
  return worker?.active_status ? "inactive" : "active";
}

function getLastPaymentDate(worker) {
  return worker?.paymentLog[worker?.paymentLog.length - 1]?.date;
}

export default WorkerCard;
