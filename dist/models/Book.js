"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    available: { type: Boolean, default: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Book", bookSchema);
