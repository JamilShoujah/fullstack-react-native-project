import { Request, Response } from "express";
import getGradesLibrary from "../../library/student-course-library";
import { IGradeObject } from "../../types/interfaces/gradeObject";

const gradeLib = getGradesLibrary();

export const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.allGrades();
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getStudentGrades = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.studentGrades(req.body.StudentID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getCourseGrades = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.courseGrades(req.body.CourseID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve grades:", error);
    res.status(500).send("Error retrieving grades");
  }
};

export const getCoursesByStudent = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.coursesByStudentId(req.body.StudentID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve courses:", error);
    res.status(500).send("Error retrieving courses");
  }
};

export const getStudentsByCourse = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.studentsByCourseId(req.body.CourseID);
    res.json(data);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const registerStudentToCourse = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.registerStudentToCourse(
      req.body.StudentID,
      req.body.CourseID
    );
    res.json(data);
  } catch (error) {
    console.error("Failed to register:", error);
    res.status(500).send("Error in registering for course");
  }
};
export const dropStudentFromCourse = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.dropStudentFromCourse(
      req.body.StudentID,
      req.body.CourseID
    );
    res.json(data);
  } catch (error) {
    console.error("Failed to drop from course", error);
    res.status(500).send("Error in dropping from course");
  }
};

export const updateStudentGrade = async (req: Request, res: Response) => {
  try {
    const data = await gradeLib.updateStudentGrade(
      req.body.StudentID,
      req.body.CourseID,
      req.body.Grade
    );
    res.json(data);
  } catch (error) {
    console.error("Failed to update grade", error);
    res.status(500).send("Error in updating grade");
  }
};

export const updateMultipleStudentGrade = async (
  req: Request,
  res: Response
) => {
  try {
    const gradeArray: IGradeObject[] = req.body.GradeArray;
    const courseId: number = req.body.CourseID;
    const results = await Promise.allSettled(
      gradeArray.map((grade) =>
        gradeLib.updateMultipleStudentGrade(courseId, grade)
      )
    );

    const failedUpdates = results.filter(
      (result) => result.status === "rejected"
    );
    if (failedUpdates.length) {
      console.error("Failed updates:", failedUpdates);
    }

    res.json({ message: "Grade updates processed", details: results });
  } catch (error) {
    console.error("Failed to update grades", error);
    res.status(500).send("Error in updating grades");
  }
};
