import express from "express";
import {
  addNewStudent,
  deleteStudentByEmail,
  deleteStudentByID,
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
router.delete("/deleteStudentById", deleteStudentByID);
router.delete("/deleteStudentByEmailAddress", deleteStudentByEmail);

export default router;
