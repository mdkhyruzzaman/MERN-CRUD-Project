// backend/app.js
// Import necessary modules
import bodyParser from "body-parser";
import express from "express";
import router from "./src/routers/api.js";
const app = express();

// Import security middleware
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";

// Scurity middleware implimentation
app.use(cors());
app.use(helmet());
app.use(hpp());

app.use(bodyParser.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
);

// Route setup
app.get("/", (req, res) => {
  res.send("Welcome to the MERN CRUD API");
});

app.use("/api/v1", router);

// Catch-all route (must be last)
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

export default app;
