import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDb from "./config/connectDb.js";

dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-Type", "Authorization"],
    origin: [
      "http://localhost:5173",
      "http://192.168.1.10:5173",
      "http://159.89.170.135",
    ],
  })
);

import userRoutes from "./routes/user.route.js";
import designRouter from "./routes/design.route.js";
import siteRoute from "./routes/site.route.js";
import vendourRouter from "./routes/vendours.route.js";
import workerRouter from "./routes/worker.route.js";

import contactUsRoute from "./routes/contactUs.route.js";
import intelRoute from "./routes/intel.route.js";

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false }));

const PORT = 3000;

app.use("/api/user", userRoutes);
app.use("/api/design", designRouter);
app.use("/api/site", siteRoute);
app.use("/api/vendour", vendourRouter);
app.use("/api/worker", workerRouter);
app.use("/api/contactUs", contactUsRoute);
app.use("/api/intel", intelRoute);

// Load Developer Intelligence daily scheduler (runs in-process)
// This import initializes and schedules the daily email job.
// If you want to disable it, remove this line or guard with an env flag.
import "./utils/AIContent.js";

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
});
