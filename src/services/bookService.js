import Book from "../models/book.model.js";
import BorrowedBook from "../models/borrowedBook.model.js";
import Member from "../models/member.model.js";

export const borrowBookService = async (memberCode, bookCode) => {
  try {
    const member = await Member.findByPk(memberCode);
    const book = await Book.findByPk(bookCode);

    if (!member || !book) {
      throw new Error("Member or Book not found");
    }

    const borrowedBooks = await BorrowedBook.findAll({
      where: { memberCode, returnDate: null },
    });
    if (borrowedBooks.length >= 2) {
      throw new Error("Member cannot borrow more than 2 books");
    }

    // const existingBorrow = await BorrowedBook.findOne({ where: { bookCode } });
    // if (existingBorrow) {
    //   throw new Error("Book is already borrowed by someone else");
    // }

    if (book.stock <= 0) {
      throw new Error("Book is out of stock");
    }

    if (member.penalty) {
      throw new Error("Member is currently penalized and cannot borrow books");
    }

    await BorrowedBook.create({
      memberCode,
      bookCode,
      borrowDate: new Date(),
    });

    book.stock -= 1;
    await book.save();

    return { message: "Book borrowed successfully" };
  } catch (error) {
    // console.log("~ File services/bookService.js borrowBookService :", error);
    throw error;
  }
};

export const returnBookService = async (memberCode, bookCode) => {
  try {
    const book = await Book.findByPk(bookCode);
    const borrowedBook = await BorrowedBook.findOne({
      where: {
        memberCode,
        bookCode,
        returnDate: null, // Menemukan entri yang belum dikembalikan
      },
    });

    if (!borrowedBook) {
      throw new Error(
        "Book was not borrowed by this member or has already been returned."
      );
    }

    const borrowDate = new Date(borrowedBook.borrowDate);
    const returnDate = new Date();
    const daysLate = Math.floor(
      (returnDate - borrowDate) / (1000 * 60 * 60 * 24)
    );

    if (daysLate > 7) {
      await Member.update({ penalty: true }, { where: { code: memberCode } });
    }

    // Restore book stock
    book.stock += 1;
    await book.save();

    // Update the specific borrowed book record
    await borrowedBook.update({ returnDate });

    setTimeout(async () => {
      await Member.update({ penalty: false }, { where: { code: memberCode } });
    }, 3 * 24 * 60 * 60 * 1000); // Penalty lasts for 3 days

    return { message: "Book returned successfully" };
  } catch (error) {
    throw error;
  }
};
