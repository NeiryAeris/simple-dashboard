import express from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.get("/allemployees", getEmployees);
router.post("/addemployee", createEmployee);
router.put("/updateemployee/:id", updateEmployee);
router.delete("/deleteemployee/:id", deleteEmployee);

export default router; 