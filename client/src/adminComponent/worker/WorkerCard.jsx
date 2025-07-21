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
import { useOutsideClick } from "../../hooks/useOutsideClick.jsx";
import Modal from "../../ui/Modal";

function WorkerCard({ worker, onClick }) {
  const [overlay, setOverlay] = useState(false);
  const ref = useOutsideClick(() => setOverlay(false));

  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // This is the key line - stops the click from bubbling up
    setOverlay((prev) => !prev);
  };

  return (
    <Modal>
      <StyledWorkerCard onClick={onClick}>
        <InnerBorder>
          {/* Use the new handler that stops propagation */}
          <Switch onClick={handleDropdownToggle}>
            <CgMoreVertical />
          </Switch>

          <Dropdown overlay={overlay} ref={ref}>
            <DropdownButton
              onClick={(e) => {
                e.stopPropagation();
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
              Total Salary:- <Span>{worker?.payment?.totalSalary}</Span>
            </Information>
          </Number>

          <Number>
            <Information color="red">
              Wednesday <Span>{worker?.payment?.weeklyGiven}</Span>
            </Information>
            <Information color="red">
              Advance<Span>{worker?.payment?.advance}</Span>
            </Information>
          </Number>
          <Information color="green">
            Remaining Balance:- <Span>{worker?.payment?.remainingBal}</Span>
          </Information>
        </InnerBorder>
      </StyledWorkerCard>
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
  return new Date(
    worker?.paymentLog[worker?.paymentLog.length - 1]?.date
  ).toLocaleDateString();
}

export default WorkerCard;
