import mongoose from "mongoose";
import dotenv from "dotenv";
import { setupMonthlyAttendanceScheduler } from "../utils/updateWorkerAttdance.js";
import { sendMail } from "./sendMail.js";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("please provide mongo db url");
}

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    setupMonthlyAttendanceScheduler();
    sendMail({
      sendTo: "nitinsehrawat602@gmail.com",
      subject: "server hass been started",
      html: "<p>server hass been started</p>",
    });

    console.log("CONNECTED");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDb;
