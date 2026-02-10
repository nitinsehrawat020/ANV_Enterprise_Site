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
    await mongoose.connect(
      "mongodb+srv://nitinsehrawat:15nov2004@anv-enterprise.vogrlyt.mongodb.net/?appName=ANV-ENTERPRISE",
    );
    setupMonthlyAttendanceScheduler();

    console.log("CONNECTED");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectDb;
