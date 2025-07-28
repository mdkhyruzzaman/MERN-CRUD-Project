import BookModel from "../models/BookModel.js";

// C = Create a new book
export const createBook = async (req, res) => {
  try {
    let reqBody = req.body;
    const book = new BookModel(reqBody);
    await book.save();
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// R = Read all books
export const readBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// U = Update a book by ID
export const updateBook = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
    let query = { _id: id };
    await BookModel.updateOne(query, reqBody);
    res.status(200).json({
      status: "success",
      message: "Book updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// D = Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    await BookModel.deleteOne(query);
    res.status(200).json({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
