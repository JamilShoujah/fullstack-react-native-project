import { Request, Response } from "express";
import getCourseLibrary from "../../library/course-library";

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

export const getCourseByName = async (req: Request, res: Response) => {
  try {
    const course = await courseLib.courseNameParams(req.body.CourseName);
    res.json(course);
  } catch (error) {
    console.error("Failed to retrieve courses:", error);
    res.status(500).send("Error retrieving course");
  }
};

export const addNewCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseLib.newCourseParams(req.body.CourseObject);
    res.json(course);
  } catch (error) {
    console.error("Failed to add course:", error);
    res.status(500).send("Error adding course");
  }
};

export const deleteCourseById = async (req: Request, res: Response) => {
  try {
    const course = await courseLib.deleteCourseByIdParams(req.body.CourseID);
    res.json(course);
  } catch (error) {
    console.error("Failed to delete courses:", error);
    res.status(500).send("Error deleting course");
  }
};
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseLib.updateCourseParams(
      req.body.CourseObject,
      req.body.CourseId
    );
    res.json(course);
  } catch (error) {
    console.error("Failed to delete courses:", error);
    res.status(500).send("Error deleting course");
  }
};
