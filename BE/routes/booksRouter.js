import express from "express";
import { getBooks, createBook, updateBook, deleteBook } from "../controllers/bookController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/allbooks", getBooks);
router.post("/addbook", upload.single("image"), createBook);
router.put("/updatebook/:id", upload.single("image"), updateBook);
router.delete("/deletebook/:id", deleteBook);

export default router;  