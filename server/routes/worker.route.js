import { Router } from "express";
import adminAuth from "../middleware/admin-auth.js";
import {
  addInventoryItem,
  addWorker,
  getAllWorker,
  getWorker,
  markAttendance,
  removeInventoryItem,
  updatePaymentLog,
} from "../controllers/worker.controller.js";
import upload from "../middleware/multer.js";

const workerRouter = new Router();

workerRouter.post(
  "/add-worker",
  adminAuth,
  upload.single("addharCard"),
  addWorker
);
workerRouter.put("/add-inventory-item/:workerId", adminAuth, addInventoryItem);
workerRouter.put(
  "/remove-inventory-item/:workerId",
  adminAuth,
  removeInventoryItem
);
workerRouter.put("/update-paymentlog/:workerId", adminAuth, updatePaymentLog);
workerRouter.put("/mark-attendance/:workerId", adminAuth, markAttendance);
workerRouter.get("/getAllWorker", adminAuth, getAllWorker);
workerRouter.get("/getWorker/:workerId", adminAuth, getWorker);

export default workerRouter;
