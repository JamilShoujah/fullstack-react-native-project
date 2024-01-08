import { Request, Response } from "express";
import getStudentLibrary from "../../library/student-library";
import studentModel from "../../models/studentModel";
const studentLib = getStudentLibrary();

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentModel.findAll();
    res.json(students);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByID = async (req: Request, res: Response) => {
  try {
    const student = await studentLib.studentIdParams(req.body.StudentID);
    res.json(student);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByFirstName = async (req: Request, res: Response) => {
  try {
    const student = await studentLib.studentFirstNameParams(
      req.body.StudentFirstName
    );
    res.json(student);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByLastName = async (req: Request, res: Response) => {
  try {
    const student = await studentLib.studentLastNameParams(
      req.body.StudentLastName
    );
    res.json(student);
    console.log(req.body.StudentLastName);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByEmailAddress = async (req: Request, res: Response) => {
  try {
    const student = await studentLib.studentEmailParams(req.body.EmailAddress);
    res.json(student);
  } catch (error) {
    console.error("Failed to retrieve student:", error);
    res.status(500).send("Error retrieving student");
  }
};

// export const addNewStudent = async (req: Request, res: Response) => {
//   try {
//     const studentObject = req.body;

//     if (!studentObject || typeof studentObject !== "object") {
//       return res.status(400).send("Invalid student data");
//     }

//     const studentEmail = studentObject.studentEmail;
//     const existingStudent = await UserModel.findByEmail(studentEmail);
//     if (existingStudent) {
//       return res.status(409).send("A student with this email already exists");
//     }

//     const newStudent = await UserModel.addNewStudent(studentObject);
//     res.status(201).json(newStudent);
//   } catch (error) {
//     console.error("Failed to add new student:", error);
//     res.status(500).send("Error adding new student");
//   }
// };
