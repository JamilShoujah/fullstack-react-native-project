import express from "express";
import {
  getAllData,
  getCourseGrades,
  getCoursesByStudent,
  getStudentGrades,
  getStudentsByCourse,
} from "./studentCourseController";

const router = express.Router();

router.post("/getAllData", getAllData);
router.post("/getStudentGrades", getStudentGrades);
router.post("/getCourseGrades", getCourseGrades);
router.post("/getCoursesByStudent", getCoursesByStudent);
router.post("/getStudentsByCourse", getStudentsByCourse);

export default router;
