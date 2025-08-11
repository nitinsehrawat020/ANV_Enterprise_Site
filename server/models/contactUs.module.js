import mongoose from "mongoose";
const contactUsSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
const contactUsModel = mongoose.model("contactUs", contactUsSchema);
export default contactUsModel;
