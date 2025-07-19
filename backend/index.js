import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

// Database connection
const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/mren-crud"; // Replace with your MongoDB URI
const optons = { username: "root", password: "password", autoIndex: true }; // Replace with your MongoDB options

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, optons);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};
// connectToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
