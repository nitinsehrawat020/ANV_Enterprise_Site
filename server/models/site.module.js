import mongoose from "mongoose";
const siteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, ref: "address" },
    phoneNumber: { type: Number, default: "" },
    workProgress: { type: Number, default: 0 },
    inventory: [
      {
        name: { type: String, default: "" },
        quantity: { type: String, default: "" },
      },
    ],
    paymentDetails: {
      totalPayment: { type: String, default: "" },
      receivedPayment: { type: Number, default: "" },
      remainingPayment: { type: String, default: "" },
    },
    lastWorkingDate: { type: Date },
    costMaking: [{ type: Object }],
    status: {
      type: String,
      enum: ["active", "complete", "upcoming"],
      default: "active",
    },
    workType: { type: String, default: "" },
    buildingDetails: {
      area: { type: String, default: "" },
      floor: { type: String, default: "" },
      flatsInfo: [
        {
          rooms: { type: Number, default: 0 },
          kitchen: { type: Number, default: 0 },
          bathroom: { type: Number, default: 0 },
          hall: { type: Number, default: 0 },
        },
      ],
    },
    paymentLog: [
      {
        date: { type: Date, default: null },
        amount: { type: Number, default: "" },
        receiver: { type: String, default: "" },
        mode: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);
const SiteModel = mongoose.model("site", siteSchema);
export default SiteModel;
