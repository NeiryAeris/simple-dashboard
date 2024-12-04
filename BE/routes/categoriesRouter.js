import express from "express";
import { getCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/allcategories", getCategories);
router.post("/addcategory", createCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

export default router;
