import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    join: {
      type: Date,
      required: true,
    },
    memberType: {
      type: String,
    },
    activeStatus: {
      type: Boolean,
    },
    addharCard: {
      type: String,
    },
    inventory: [
      {
        name: { type: String },
        quantity: { type: Number },
      },
    ],
    payment: {
      totalSalery: { type: Number },
      advance: { type: Number },
      weeklyGiven: { type: Number },
      remainingBal: { type: Number },
    },
    paymentLog: [
      {
        amount: { type: Number },
        date: { type: Date },
        paymentFor: { type: String },
        paymentType: { type: String },
      },
    ],
    attendance: {
      type: mongoose.Schema.ObjectId,
      ref: "attendance",
    },
  },
  { timestamps: true }
);

const WorkerModel = mongoose.model("worker", workerSchema);

export default WorkerModel;
