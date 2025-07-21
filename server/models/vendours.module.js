import mongoose from "mongoose";
const vendoursSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, default: "" },
    payment: {
      totalBalance: { type: Number, default: "" },
    },
    transaction: [
      {
        date: { type: Date, default: null },
        amount: { type: Number, default: "" },
        status: { type: String, default: "" },
        items: [
          {
            site: { type: mongoose.Schema.Types.ObjectId, ref: "site" },
            itemList: [
              {
                name: { type: String },
                price: { type: Number },
                quantity: { type: Number },
              },
            ],
          },
        ],
      },
    ],
    paymentHistory: [
      {
        date: { type: Date, default: null },
        amount: { type: Number, default: 0 },
        mode: { type: String },
      },
    ],
    itemCosting: [{ name: { type: String }, price: { type: Number } }],
  },
  { timestamps: true }
);
const VendoursModel = mongoose.model("vendours", vendoursSchema);
export default VendoursModel;
