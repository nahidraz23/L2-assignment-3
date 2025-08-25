"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBooks = void 0;
const Book_1 = __importDefault(require("../models/Book"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield Book_1.default.find();
    res.json(books);
});
exports.getBooks = getBooks;
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, genre, isbn, description, copies } = req.body;
        // Create a new book with all fields
        const book = new Book_1.default({
            title,
            author,
            genre,
            isbn,
            description,
            copies,
            available: copies > 0,
        });
        yield book.save();
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to add book",
            error: error.message,
        });
    }
});
exports.addBook = addBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Book_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book)
            return res.status(404).json({ message: "Book not found" });
        res.json(book);
    }
    catch (error) {
        res.status(400).json({ message: "Failed to update book" });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Book_1.default.findByIdAndDelete(req.params.id);
        if (!book)
            return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ message: "Failed to delete book" });
    }
});
exports.deleteBook = deleteBook;
