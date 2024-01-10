import express from "express";
import {
  dropStudentFromCourse,
  getAllData,
  getCourseGrades,
  getCoursesByStudent,
  getStudentGrades,
  getStudentsByCourse,
  registerStudentToCourse,
  updateStudentGrade,
} from "./studentCourseController";

const router = express.Router();

router.post("/getAllData", getAllData);
router.post("/getStudentGrades", getStudentGrades);
router.post("/getCourseGrades", getCourseGrades);
router.post("/getCoursesByStudent", getCoursesByStudent);
router.post("/getStudentsByCourse", getStudentsByCourse);
router.post("/registerStudentToCourse", registerStudentToCourse);
router.delete("/dropStudentFromCourse", dropStudentFromCourse);
router.put("/updateStudentGrade", updateStudentGrade);

export default router;
