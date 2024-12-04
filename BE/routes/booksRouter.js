import express from "express";
import { getBooks, createBook, updateBook, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/allbooks", getBooks);
router.post("/addbook", createBook);
router.put("/updatebook/:id", updateBook);
router.delete("/deletebook/:id", deleteBook);

export default router;  