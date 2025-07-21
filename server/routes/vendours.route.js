import { Router } from "express";
import adminAuth from "../middleware/admin-auth.js";
import {
  addVendour,
  getVendours,
  updatePayment,
  updatePaymentHistory,
  updateTransaction,
} from "../controllers/vendour.controller.js";

const vendourRouter = new Router();

vendourRouter.post("/add-vendour", adminAuth, addVendour);
vendourRouter.get("/get-vendour", adminAuth, getVendours);
vendourRouter.put("/update-payment/:vendourId", adminAuth, updatePayment);
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

export default vendourRouter;
