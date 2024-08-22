import { borrowBookService, returnBookService } from "../services/bookService.js";

// Borrow a book
export const borrowBook = async (req, res) => {
  try {
    const { memberCode, bookCode } = req.body;
    const response = await borrowBookService(memberCode, bookCode);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Return a book
export const returnBook = async (req, res) => {
  try {
    const { memberCode, bookCode } = req.body;
    const response = await returnBookService(memberCode, bookCode);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
