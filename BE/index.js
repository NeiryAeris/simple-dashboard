import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dbConnect from "./dbContext/dbConnect.js";

// Import routes
import employeeRoutes from "./routes/employeesRouter.js";
import productRoutes from "./routes/productsRouter.js";
import categoryRoutes from "./routes/categoriesRouter.js";
import bookRoutes from "./routes/booksRouter.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

dbConnect();

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/books", bookRoutes);
// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
