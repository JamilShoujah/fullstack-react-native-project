import mysqlConnection from "../database";
import { IStudentObject } from "../types/interfaces/studentObject";

const studentModel = {
  findAll: async () => {
    const myQuery = "SELECT * FROM Student";
    return mysqlConnection.query(myQuery);
  },

  findById: async (id: number) => {
    const myQuery = `
      SELECT *
      FROM Student
      WHERE StudentID = ?
      `;
    return mysqlConnection.query(myQuery, [id]);
  },

  findByFirstName: async (firstName: string) => {
    const myQuery = `
    SELECT * 
    FROM Student 
    WHERE StudentFirstName = ?`;

    return mysqlConnection.query(myQuery, [firstName]);
  },

  findByLastName: async (LastName: string) => {
    const myQuery = `
      SELECT * 
      FROM Student 
      WHERE StudentLastName = ?`;

    return mysqlConnection.query(myQuery, [LastName]);
  },

  findByEmail: async (Email: string) => {
    const myQuery = "SELECT * FROM Student WHERE Email = ?";
    return mysqlConnection.query(myQuery, [Email]);
  },

  addNewStudent: async (studentObject: IStudentObject) => {
    const {
      studentFirstName,
      studentLastName,
      studentEmail,
      studentDateOfBirth,
      studentAddress,
      studentPhone,
    } = studentObject;

    const myQuery = `
      INSERT INTO Student 
      (
        StudentFirstName, 
        StudentLastName, 
        Email, 
        DateOfBirth, 
        Address, 
        Phone
      ) 
      VALUES 
      (?, ?, ?, ?, ?, ?)`;

    return mysqlConnection.query(myQuery, [
      studentFirstName,
      studentLastName,
      studentEmail,
      studentDateOfBirth,
      studentAddress,
      studentPhone,
    ]);
  },

  deleteById: async (id: number) => {
    const myQuery = `
      DELETE
      FROM Student
      WHERE StudentID = ?
      `;
    return mysqlConnection.query(myQuery, [id]);
  },

  deleteByEmail: async (Email: string) => {
    const myQuery = `
      DELETE 
      FROM student 
      WHERE Email = ?;
      `;
    return mysqlConnection.query(myQuery, [Email]);
  },
};

export default studentModel;
