import { Request, Response } from "express";
import UserModel from "../models/studentModel";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await UserModel.findAll();
    res.json(students);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByID = async (req: Request, res: Response) => {
  try {
    const studentIdParam = req.query.StudentID;
    const studentId = Number(studentIdParam);
    const student = await UserModel.findById(studentId);
    res.json(student);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};

export const getStudentByFirstName = async (req: Request, res: Response) => {
  try {
    const studentFirstNameParam = req.query.FirstName;

    if (
      typeof studentFirstNameParam === "undefined" ||
      studentFirstNameParam === null
    ) {
      return res.status(400).send("FirstName query parameter is required");
    }

    const studentName = studentFirstNameParam.toString();
    const student = await UserModel.findByFirstName(studentName);
    res.json(student);
  } catch (error) {
    console.error("Failed to retrieve students:", error);
    res.status(500).send("Error retrieving students");
  }
};
