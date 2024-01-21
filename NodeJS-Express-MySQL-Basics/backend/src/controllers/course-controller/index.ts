import express from "express";
import {
  addNewCourse,
  deleteCourseById,
  getAllCourses,
  getCourseById,
  getCourseByName,
  updateCourse,
} from "./courseController";

const router = express.Router();

router.post("/getCourses", getAllCourses);
router.post("/getCourseById", getCourseById);
router.post("/getCourseByName", getCourseByName);
router.post("/addCourse", addNewCourse);
router.delete("/deleteCourseById", deleteCourseById);
router.put("/updateCourse", updateCourse);

export default router;
