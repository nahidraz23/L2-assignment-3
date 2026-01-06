import { Request, Response } from "express";
import Borrow from "../models/Borrow";
import Book from "../models/Book";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { bookId, borrowerName } = req.body;

    const book = await Book.findById(bookId);
    if (!book || !book.available) {
      return res.status(400).json({ message: "Book not available" });
    }

    book.available = false;
    await book.save();

    const borrow = new Borrow({ bookId, borrowerName });
    await borrow.save();

    res.status(201).json(borrow);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const borrow = await Borrow.findById(req.params.id).populate("bookId");
    if (!borrow) return res.status(404).json({ message: "Borrow record not found" });

    borrow.returnDate = new Date();
    await borrow.save();

    const book = await Book.findById(borrow.bookId);
    if (book) {
      book.available = true;
      await book.save();
    }

    res.json({ message: "Book returned successfully", borrow });
  } catch (error) {
    res.status(400).json({ error });
  }
};
