import { Request, Response } from "express";
import getCourseLibrary from "../../library/course-library";
import courseModel from "../../models/course-model";

const courseLib = getCourseLibrary();

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseLib.allCourses();
    res.json(courses);
  } catch (error) {
    console.error("Failed to retrieve courses:", error);
    res.status(500).send("Error retrieving course");
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await courseLib.courseIdParams(req.body.CourseId);
    res.json(course);
  } catch (error) {
    console.error("Failed to retrieve courses:", error);
    res.status(500).send("Error retrieving course");
  }
};
