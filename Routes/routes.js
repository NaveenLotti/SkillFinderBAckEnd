import express from "express";
import { getAllStudents, getStudent } from "../Controller/studentController.js";

const router = express.Router();

router.get("/getStudent/:rollNo", getStudent);

router.get("/getAll", getAllStudents);

export default router;
