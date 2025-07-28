// backend/index.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

// Database connection
const uri = process.env.DATABASE_URL; // Replace with your MongoDB URI

const options = { autoIndex: true };

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};
connectToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
