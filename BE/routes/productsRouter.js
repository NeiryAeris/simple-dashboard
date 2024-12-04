import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/allproducts", getProducts);
router.post("/addproduct", createProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

export default router; 