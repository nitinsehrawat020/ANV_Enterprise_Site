import { Router } from "express";

import { validateRegisterUser } from "../middleware/validation.js";

import {
  registerUserController,
  logoutController,
  loginUserController,
  verifyEmailController,
  uploadAvatarController,
  updateUserDetialsController,
  forgetPasswordController,
  verifyForgetPasswordOtp,
  resetPassword,
  refreshToken,
  addTofav,
  removeFromFav,
  userInfo,
  favDesign,
} from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRouter = Router();

userRouter.post("/register-user", validateRegisterUser, registerUserController);

userRouter.post("/verify-email", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.get("/logout", auth, logoutController);
userRouter.put(
  "/upload-avatar",
  auth,
  upload.single("avatar"),
  uploadAvatarController
);
userRouter.put("/update-user", auth, updateUserDetialsController);
userRouter.put("/forget-password", forgetPasswordController);
userRouter.put("/verify-forget-password-otp", verifyForgetPasswordOtp);
userRouter.put("/reset-password", resetPassword);
userRouter.post("/refresh-token", refreshToken);
userRouter.post("/add-to-fav/:designId", auth, addTofav);
userRouter.post("/remove-from-fav/:designId", auth, removeFromFav);
userRouter.get("/userInfo", auth, userInfo);
userRouter.get("/favDesign", auth, favDesign);

export default userRouter;
