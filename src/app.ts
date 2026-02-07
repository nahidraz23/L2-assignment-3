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
app.options('*', cors());

app.use(cors({
  origin: ['http://localhost:5173', 'https://book-shelf-client-pied.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://book-shelf-client-pied.vercel.app'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  next();
});

// API routes
app.use("/api/books", bookRoutes);
app.use("/api/borrows", borrowRoutes);

// Default root route
app.get("/", (req, res) => {
  res.send("Library Management API is running...");
});

export default app;
