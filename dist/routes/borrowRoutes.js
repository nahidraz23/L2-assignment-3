"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrowController_1 = require("../controllers/borrowController");
const router = (0, express_1.Router)();
router.post("/", borrowController_1.borrowBook);
router.put("/:id/return", borrowController_1.returnBook);
exports.default = router;
