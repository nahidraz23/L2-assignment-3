"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BorrowSchema = new mongoose_1.Schema({
    bookId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Book", required: true },
    memberId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Member", required: true },
    borrowDate: { type: Date, default: Date.now },
    returnDate: { type: Date },
});
exports.default = (0, mongoose_1.model)("Borrow", BorrowSchema);
