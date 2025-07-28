// backend/src/routers/api.js
import { Router } from "express";
import {
  createBook,
  readBooks,
  updateBook,
  deleteBook,
} from "../controllers/BookController.js";

const router = Router();

// C = Create a new book
router.post("/books", createBook);

// R = Read all books
router.get("/books", readBooks);

// U = Update a book by ID
router.put("/books/:id", updateBook);

// D = Delete a book by ID
router.delete("/books/:id", deleteBook);

export default router;
