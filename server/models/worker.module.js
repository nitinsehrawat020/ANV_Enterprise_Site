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
      totalSalary: { type: Number, default: 0 },
      advance: { type: Number, default: 0 },
      weeklyGiven: { type: Number, default: 0 },
      remainingBal: { type: Number, default: 0 },
      salaryGiven: { type: Number, default: 0 },
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
