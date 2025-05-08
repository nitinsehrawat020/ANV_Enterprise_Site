import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "please provide the name"] },
    lastName: { type: String, required: [true, "please provide the name"] },
    email: { type: String, required: [true, "please provide the email"] },
    password: { type: String, required: [true, "please provide the password"] },
    avatar: { type: String, default: "" },
    mobileNumber: { type: Number, default: null },
    refreshToken: { type: String, default: "" },
    verifyEmail: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "suspended"], default: "active" },
    addressDetails: { type: String },
    favDesign: { type: mongoose.Schema.ObjectId, ref: "favorite" },
    userSites: [{ type: mongoose.Schema.ObjectId, ref: "site" }],
    forgetPaswordOtp: { type: String, default: "" },
    forgetPasswordExpire: { type: Date, default: "" },
    role: { type: String, enum: ["user", "admin", "worker"], default: "user" },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", userSchema);

export default UserModel;
