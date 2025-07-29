import axios from "axios";

export const createBook = async (book) => {
  try {
    const response = await axios.post("/api/v1/books", book);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const response = await axios.get("/api/v1/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`/api/v1/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`/api/v1/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
