import * as React from "react";

import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Modal from "./Modal";
import UpdatePaymentModal from "../adminComponent/worker/UpdatePaymentModal";
import PaymentHistoryModal from "../adminComponent/worker/PaymentHistoryModal";
import AddWorkerModal from "../adminComponent/worker/AddWorkerModal";

export default function SpeedDialTooltipOpen() {
  const actions = [
    {
      icon: (
        <Modal.Open opens="updatePayment">
          <CurrencyRupeeOutlinedIcon />
        </Modal.Open>
      ),
      name: "Update Payment",
      operation: () => {
        <Modal.Window name="updatePayment">
          <UpdatePaymentModal />
        </Modal.Window>;
        handleClose();
      },
    },
    {
      icon: (
        <Modal.Open opens="paymentHistory">
          <PriceCheckIcon />
        </Modal.Open>
      ),
      name: "Payment History",
      operation: () => {
        <Modal.Window name="paymentHistory">
          <PaymentHistoryModal />
        </Modal.Window>;
        handleClose();
      },
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        position: "fixed",
        bottom: 100,
        right: 20,
        flexGrow: 1,
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="admin_worker"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.operation}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
