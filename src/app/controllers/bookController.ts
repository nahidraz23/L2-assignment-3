import { Request, Response } from "express";
import Book from "../models/Book";

export const getBooks = async (req: Request, res: Response) => {
  const books = await Book.find();
  res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const newBook = req.body;
    const book = new Book(newBook);

    await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add book",
      error: (error as Error).message,
    });
  }
};


export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: "Failed to update book" });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete book" });
  }
};
