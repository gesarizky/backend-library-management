import Book from "../models/book.model.js";
import BorrowedBook from "../models/borrowedBook.model.js";
import { Op } from "sequelize";

// Get all books, excluding borrowed ones
export const getBooks = async (req, res) => {
  try {
    const borrowedBooks = await BorrowedBook.findAll({
      attributes: ["bookCode"],
    });
    const borrowedBookCodes = borrowedBooks.map((b) => b.bookCode);

    const books = await Book.findAll({
      where: {
        code: {
          [Op.notIn]: borrowedBookCodes,
        },
      },
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

// Add a new book
export const addBook = async (req, res) => {
  try {
    const { code, title, author, stock } = req.body;
    const book = await Book.create({ code, title, author, stock });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { code } = req.params;
    const { title, author, stock } = req.body;
    const book = await Book.update(
      { title, author, stock },
      { where: { code } }
    );
    if (book[0]) {
      res.json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { code } = req.params;
    const result = await Book.destroy({ where: { code } });
    if (result) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

