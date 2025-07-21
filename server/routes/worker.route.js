import { Router } from "express";
import adminAuth from "../middleware/admin-auth.js";
import {
  addInventoryItem,
  addWorker,
  getAllWorker,
  getWorker,
  markAttendance,
  removeInventoryItem,
  updatePayment,
  updateWednesdayPayment,
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
workerRouter.put("/update-payment", adminAuth, updatePayment);
workerRouter.put("/mark-attendance", adminAuth, markAttendance);
workerRouter.get("/getAllWorker", adminAuth, getAllWorker);
workerRouter.get("/getWorker/:workerId", adminAuth, getWorker);
workerRouter.put(
  "/update-wednesday-payment",
  adminAuth,
  updateWednesdayPayment
);

export default workerRouter;
