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
    origin: process.env.FRONDEND_URL,
  })
);

// import all routes
import userRoutes from "./routes/user.route.js";
import designRouter from "./routes/design.route.js";
import siteRoute from "./routes/site.route.js";
import vendourRouter from "./routes/vendours.route.js";
import workerRouter from "./routes/worker.route.js";

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ contentSecurityPolicy: false }));

const PORT = 5000;

// use all routes
app.use("/api/user", userRoutes);
app.use("/api/design", designRouter);
app.use("/api/site", siteRoute);
app.use("/api/vendour", vendourRouter);
app.use("/api/worker", workerRouter);

app.get("/", (req, res) => {
  res.status(500).json({
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
