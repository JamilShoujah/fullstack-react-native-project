import { Request, Response } from "express";
import studentLibrary from "../../library/student-library";
import studentModel from "../../models/studentModel";
import UserModel from "../../models/studentModel";

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
    const studentIdParam = req.query.StudentID;
    // const studentId = Number(studentIdParam);
    // const student = await UserModel.findById(studentId);
    const result = studentLibrary.getStudentByID();
    res.json(result);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

// export const getStudentByFirstName = async (req: Request, res: Response) => {
//   try {
//     const studentFirstNameParam = req.query.FirstName;

//     if (
//       typeof studentFirstNameParam === "undefined" ||
//       studentFirstNameParam === null
//     ) {
//       return res.status(400).send("FirstName query parameter is required");
//     }

//     const studentName = studentFirstNameParam.toString();
//     const student = await UserModel.findByFirstName(studentName);
//     res.json(student);
//   } catch (error) {
//     console.error("Failed to retrieve students:", error);
//     res.status(500).send("Error retrieving students");
//   }
// };

// export const getStudentByLastName = async (req: Request, res: Response) => {
//   try {
//     const studentLastNameParam = req.query.LastName;

//     if (
//       typeof studentLastNameParam === "undefined" ||
//       studentLastNameParam === null
//     ) {
//       return res.status(400).send("LastName query parameter is required");
//     }

//     const studentLastName = studentLastNameParam.toString();
//     const student = await UserModel.findByLastName(studentLastName);
//     res.json(student);
//   } catch (error) {
//     console.error("Failed to retrieve students:", error);
//     res.status(500).send("Error retrieving students");
//   }
// };

// export const getStudentByEmailAddress = async (req: Request, res: Response) => {
//   try {
//     const studentEmailAddressParam = req.query.EmailAddress;

//     if (
//       typeof studentEmailAddressParam === "undefined" ||
//       studentEmailAddressParam === null
//     ) {
//       return res.status(400).send("EmailAddress query parameter is required");
//     }

//     const studentEmailAddress = studentEmailAddressParam.toString();
//     const student = await UserModel.findByEmail(studentEmailAddress);
//     res.json(student);
//   } catch (error) {
//     console.error("Failed to retrieve student:", error);
//     res.status(500).send("Error retrieving student");
//   }
// };

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
