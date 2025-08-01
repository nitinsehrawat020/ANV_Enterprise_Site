import { Router } from "express";
import adminAuth from "../middleware/admin-auth.js";
import {
  addVendour,
  deleteVendour,
  getVendours,
  updatePaymentHistory,
  updateTransaction,
} from "../controllers/vendour.controller.js";

const vendourRouter = new Router();

vendourRouter.post("/add-vendour", adminAuth, addVendour);
vendourRouter.get("/get-vendour", adminAuth, getVendours);
vendourRouter.put(
  "/update-paymentHistory/:vendourId",
  adminAuth,
  updatePaymentHistory
);
vendourRouter.put(
  "/update-transaction/:vendourId",
  adminAuth,
  updateTransaction
);
vendourRouter.delete("/delete-vendour/:vendourId", adminAuth, deleteVendour);

export default vendourRouter;
