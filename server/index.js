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

// Initialize Developer Intelligence Engine
import intelligenceEngine from "./utils/AIContent.js";

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

// Developer Intelligence Engine API endpoints
app.get("/api/intelligence/status", (req, res) => {
  res.json({
    success: true,
    data: intelligenceEngine.getStatus(),
    message: "Developer Intelligence Engine status retrieved successfully",
  });
});

app.post("/api/intelligence/run", async (req, res) => {
  try {
    const result = await intelligenceEngine.runNow();
    res.json({
      success: result.success,
      data: result,
      message: result.success
        ? "Intelligence pipeline executed successfully"
        : "Intelligence pipeline execution failed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to execute intelligence pipeline",
    });
  }
});

app.get("/", (req, res) => {
  res.status(400).json({
    status: "error",
    message: "the request is send to the home route",
    success: false,
  });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
});
