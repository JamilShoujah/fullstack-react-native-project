import express from "express";
import {
  getAllStudents,
  getStudentByFirstName,
  getStudentByID,
} from "../controllers/studentsController";

const router = express.Router();

router.get("/students", getAllStudents);
router.get("/students/studentid", getStudentByID);
router.get("/students/firstname", getStudentByFirstName);

export default router;
