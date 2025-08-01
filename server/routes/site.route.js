import { Router } from "express";
import adminAuth from "../middleware/admin-auth.js";
import {
  addItemToInventory,
  addPaymentLog,
  deleteSite,
  getAllSites,
  registerNewSite,
  removeItemFromInventory,
  updateInventoryItem,
  updateworkProgress,
} from "../controllers/site.controller.js";

const siteRoute = new Router();

siteRoute.post("/register-site", adminAuth, registerNewSite);
siteRoute.post("/update-work-progress/:siteId", adminAuth, updateworkProgress);
siteRoute.post("/add-item-to-inventory/:siteId", adminAuth, addItemToInventory);
siteRoute.post(
  "/update-inventory-item/:siteId",
  adminAuth,
  updateInventoryItem
);
siteRoute.post(
  "/remove-item-from-inventory/:siteId",
  adminAuth,
  removeItemFromInventory
);
siteRoute.get("/get-sites", adminAuth, getAllSites);
siteRoute.post("/add-payment-log/:siteId", adminAuth, addPaymentLog);
siteRoute.delete("/delete-site/:siteId", adminAuth, deleteSite);

export default siteRoute;
