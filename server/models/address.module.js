import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    adressLine: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
    country: { type: String, default: "" },
  },
  { timestamps: true }
);

const addressModel = mongoose.model("address", addressSchema);

export default addressModel;
