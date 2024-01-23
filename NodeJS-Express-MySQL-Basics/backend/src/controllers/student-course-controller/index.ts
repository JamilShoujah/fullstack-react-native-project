import express from "express";
import {
  dropStudentFromCourse,
  getAllData,
  getCourseGrades,
  getCoursesByStudent,
  getStudentGrades,
  getStudentsByCourse,
  registerMultipleStudentsToCourse,
  registerStudentToCourse,
  updateMultipleStudentGrade,
  updateStudentGrade,
} from "./studentCourseController";

const router = express.Router();

router.post("/getAllData", getAllData);
router.post("/getStudentGrades", getStudentGrades);
router.post("/getCourseGrades", getCourseGrades);
router.post("/getCoursesByStudent", getCoursesByStudent);
router.post("/getStudentsByCourse", getStudentsByCourse);
router.post("/registerStudentToCourse", registerStudentToCourse);
router.post(
  "/registerMultipleStudentToCourse",
  registerMultipleStudentsToCourse
);
router.delete("/dropStudentFromCourse", dropStudentFromCourse);
router.put("/updateStudentGrade", updateStudentGrade);
router.put("/updateMultipleStudentGrade", updateMultipleStudentGrade);

export default router;
