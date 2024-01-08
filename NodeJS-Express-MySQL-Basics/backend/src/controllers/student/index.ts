import express from "express";
import {
  addNewStudent,
  getAllStudents,
  getStudentByEmailAddress,
  getStudentByFirstName,
  getStudentByID,
  getStudentByLastName,
} from "./studentsController";

const router = express.Router();

router.post("/getStudents", getAllStudents);
router.post("/getStudentByID", getStudentByID);
router.post("/getStudentsByFirstName", getStudentByFirstName);
router.post("/getStudentsByLastName", getStudentByLastName);
router.post("/getStudentsByEmail", getStudentByEmailAddress);
router.post("/addStudents", addNewStudent);

export default router;
