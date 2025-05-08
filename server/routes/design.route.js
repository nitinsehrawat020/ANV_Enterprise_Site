import { Router } from "express";
import {
  postAddDesignController,
  getDesignController,
  getFlaseCeilDesignController,
  getMoldingDesignController,
  putEditDesignController,
  getDesignDetailsController,
  deleteDesignController,
} from "../controllers/design.controller.js";
import { validateAddDesign } from "../middleware/validation.js";
import adminAuth from "../middleware/admin-auth.js";
import upload from "../middleware/multer.js";

const designRouter = new Router();

designRouter.post(
  "/add-design",
  adminAuth,
  // validateAddDesign,
  upload.single("image"),
  postAddDesignController
);
designRouter.get("/get-all-designs", getDesignController);
designRouter.get("/get-molding-designs", getMoldingDesignController);
designRouter.get("/get-false-ceil-designs", getFlaseCeilDesignController);
designRouter.put("/get-design-detail/:designId", getDesignDetailsController);
designRouter.put("/edit-design/:designId", adminAuth, putEditDesignController);
designRouter.delete(
  "/delete-design/:designId",
  adminAuth,
  deleteDesignController
);

export default designRouter;
