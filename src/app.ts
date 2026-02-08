import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/config/db";
import bookRoutes from "./app/routes/bookRoutes";
import borrowRoutes from "./app/routes/borrowRoutes";
import cors from 'cors'

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  // "http://localhost:5173",
  "https://book-shelf-client-pied.vercel.app"
];

app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    // methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// VERY IMPORTANT for Vercel
app.options("*", cors());

// API routes
app.use("/api/books", bookRoutes);
app.use("/api/borrows", borrowRoutes);

// Default root route
app.get("/", (req, res) => {
  res.send("Library Management API is running...");
});

export default app;
