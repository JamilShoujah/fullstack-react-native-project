import express from "express";
import {
  // addNewStudent,
  getAllStudents,
  // getStudentByEmailAddress,
  // getStudentByFirstName,
  // getStudentByID,
  // getStudentByLastName,
} from "./studentsController";

const router = express.Router();

router.get("/getStudents", getAllStudents);
// router.get("/getStudentByID", getStudentByID);
// router.get("/getStudentByFirstname", getStudentByFirstName);
// router.get("/students/lastname", getStudentByLastName);
// router.get("/students/emailaddress", getStudentByEmailAddress);
// router.post("/addStudents", addNewStudent);

export default router;
