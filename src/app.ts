import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import bookRoutes from "./app/routes/bookRoutes";
import borrowRoutes from "./app/routes/borrowRoutes";
import cors from 'cors'

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://book-shelf-client-pied.vercel.app']
}))

// Default root route
app.get("/", (req, res) => {
  res.send("Library Management API is running...");
});

// API routes
app.use("/api/books", bookRoutes);
app.use("/api/borrows", borrowRoutes);

export default app;
