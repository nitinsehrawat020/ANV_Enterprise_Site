import { useState } from "react";
import Heading from "../../ui/Heading";
import {
  Dropdown,
  DropdownButton,
  Information,
  InnerBorder,
  LastPayment,
  Name_Profile,
  PaymentGrid,
  PaymentRow,
  Span,
  StatusBadge,
  StyledWorkerCard,
  Switch,
} from "./StyleWorker";

import { CgMoreVertical } from "react-icons/cg";
import { useOutsideClick } from "../../../../useOutsideClick.jsx";
import Modal from "../../ui/Modal";

function WorkerCard({ worker, onClick }) {
  const [overlay, setOverlay] = useState(false);
  const ref = useOutsideClick(() => setOverlay(false));

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setOverlay((prev) => !prev);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  return (
    <Modal>
      <StyledWorkerCard onClick={onClick}>
        <InnerBorder>
          <StatusBadge active={worker?.activeStatus}>
            {worker?.activeStatus ? "Active" : "Inactive"}
          </StatusBadge>

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
              Change to {getWorkerStatusText(worker)}
            </DropdownButton>
          </Dropdown>

          <Name_Profile>
            <Heading as="h3">{worker?.name || "Unknown Worker"}</Heading>
            <span>{worker?.memberType || "No Role Assigned"}</span>
          </Name_Profile>

          <LastPayment>
            <span>Last Paid: </span>
            <Span>{getLastPaymentDate(worker) || "Not paid yet"}</Span>
          </LastPayment>

          <PaymentGrid>
            <Information color="yellow">
              <div className="label">Total Salary</div>
              <div className="value">
                {formatCurrency(worker?.payment?.totalSalary)}
              </div>
            </Information>

            <PaymentRow>
              <Information color="red">
                <div className="label">Weekly</div>
                <div className="value">
                  {formatCurrency(worker?.payment?.weeklyGiven)}
                </div>
              </Information>
              <Information color="red">
                <div className="label">Advance</div>
                <div className="value">
                  {formatCurrency(worker?.payment?.advance)}
                </div>
              </Information>
            </PaymentRow>

            <Information color="green">
              <div className="label">Remaining Balance</div>
              <div className="value">
                {formatCurrency(worker?.payment?.remainingBal)}
              </div>
            </Information>
          </PaymentGrid>
        </InnerBorder>
      </StyledWorkerCard>
    </Modal>
  );
}

function toggleWorkerStatus(worker) {
  // Note: This should ideally call an API to update the worker status
  // For now, just toggling the local state
  worker.activeStatus = !worker.activeStatus;
}

function getWorkerStatusText(worker) {
  return worker?.activeStatus ? "inactive" : "active";
}

function getLastPaymentDate(worker) {
  if (!worker?.paymentLog || worker.paymentLog.length === 0) {
    return null;
  }

  try {
    const lastPayment = worker.paymentLog[worker.paymentLog.length - 1];
    return new Date(lastPayment?.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
}

export default WorkerCard;
