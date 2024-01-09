import { Request, Response } from "express";
import getStudentLibrary from "../../library/student-library";
import studentModel from "../../models/student-model";
const studentLib = getStudentLibrary();

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentLib.allStudents();
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

export const addNewStudent = async (req: Request, res: Response) => {
  try {
    await studentLib.newStudentParams(req.body.StudentObject);
    res.status(201).send("Student successfully added");
  } catch (error) {
    console.error("Failed to add new student:", error);
    res.status(500).send("Error adding new student");
  }
};

export const deleteStudentByID = async (req: Request, res: Response) => {
  try {
    await studentLib.deleteByStudentIdParams(req.body.StudentID);
    res.status(200).send("Student successfully deleted");
  } catch (error) {
    console.error("Failed to delete students:", error);
    res.status(500).send("Failed to delete student");
  }
};

export const deleteStudentByEmail = async (req: Request, res: Response) => {
  try {
    await studentLib.deleteByStudentEmailParams(req.body.EmailAddress);
    res.status(200).send("Student successfully deleted");
  } catch (error) {
    console.error("Failed to delete students:", error);
    res.status(500).send("Failed to delete student");
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    await studentModel.updateStudentById(
      req.body.StudentObject,
      req.body.StudentID
    );
    res.status(201).send("Student successfully updated");
  } catch (error) {
    console.error("Failed to updated student:", error);
    res.status(500).send("Error updating student");
  }
};
