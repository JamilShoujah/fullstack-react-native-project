import { Request, Response } from "express";
import getGradesLibrary from "../../library/student-course-library";

const gardeLib = getGradesLibrary();

export const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await gardeLib.allGrades();
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getStudentGrades = async (req: Request, res: Response) => {
  try {
    const data = await gardeLib.studentGrades(req.body.StudentID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getCourseGrades = async (req: Request, res: Response) => {
  try {
    const data = await gardeLib.courseGrades(req.body.CourseID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getCoursesByStudent = async (req: Request, res: Response) => {
  try {
    const data = await gardeLib.coursesByStudentId(req.body.StudentID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve courses:", error);
    res.status(500).send("Error retrieving courses");
  }
};

export const getStudentsByCourse = async (req: Request, res: Response) => {
  try {
    const data = await gardeLib.studentsByCourseId(req.body.CourseID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};
