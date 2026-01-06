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
exports.returnBook = exports.borrowBook = void 0;
const Borrow_1 = __importDefault(require("../models/Borrow"));
const Book_1 = __importDefault(require("../models/Book"));
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId, borrowerName } = req.body;
        const book = yield Book_1.default.findById(bookId);
        if (!book || !book.available) {
            return res.status(400).json({ message: "Book not available" });
        }
        book.available = false;
        yield book.save();
        const borrow = new Borrow_1.default({ bookId, borrowerName });
        yield borrow.save();
        res.status(201).json(borrow);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.borrowBook = borrowBook;
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = yield Borrow_1.default.findById(req.params.id).populate("bookId");
        if (!borrow)
            return res.status(404).json({ message: "Borrow record not found" });
        borrow.returnDate = new Date();
        yield borrow.save();
        const book = yield Book_1.default.findById(borrow.bookId);
        if (book) {
            book.available = true;
            yield book.save();
        }
        res.json({ message: "Book returned successfully", borrow });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.returnBook = returnBook;
