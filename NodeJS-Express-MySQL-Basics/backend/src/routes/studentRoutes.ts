import express from "express";
import {
  getAllStudents,
  getStudentByEmailAddress,
  getStudentByFirstName,
  getStudentByID,
  getStudentByLastName,
} from "../controllers/studentsController";

const router = express.Router();

router.get("/students", getAllStudents);
router.get("/students/studentid", getStudentByID);
router.get("/students/firstname", getStudentByFirstName);
router.get("/students/lastname", getStudentByLastName);
router.get("/students/emailaddress", getStudentByEmailAddress);

export default router;
