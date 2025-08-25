import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import bookRoutes from "./routes/bookRoutes";
import borrowRoutes from "./routes/borrowRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrows", borrowRoutes);

export default app;
