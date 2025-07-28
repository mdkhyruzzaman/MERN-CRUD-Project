import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String },
    status: { type: String, default: "To Read" },
    rating: { type: Number, min: 0, max: 5 },
    Notes: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const BookModel = mongoose.model("books", BookSchema);
export default BookModel;
