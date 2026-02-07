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
  "http://localhost:5173",
  "https://book-shelf-client-pied.vercel.app"
];

app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
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
