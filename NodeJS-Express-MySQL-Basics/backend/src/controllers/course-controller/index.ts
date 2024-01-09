import express from "express";
import { getAllCourses, getCourseById } from "./courseController";

const router = express.Router();

router.post("/getCourses", getAllCourses);
router.post("/getCourseById", getCourseById);
// router.post("/getStudentsByFirstName", getStudentByFirstName);
// router.post("/getStudentsByLastName", getStudentByLastName);
// router.post("/getStudentsByEmail", getStudentByEmailAddress);
// router.post("/addStudents", addNewStudent);
// router.delete("/deleteStudentById", deleteStudentByID);
// router.delete("/deleteStudentByEmailAddress", deleteStudentByEmail);
// router.put("/updateStudent", updateStudent);

export default router;
