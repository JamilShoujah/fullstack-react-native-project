import mysqlConnection from "../../database";
import { IStudentObject } from "../../types/interfaces/studentObject";

const studentModel = {
  findAll: async () => {
    const myQuery = `
    SELECT * 
    FROM student_table
    `;
    return mysqlConnection.query(myQuery);
  },

  findById: async (id: number) => {
    const myQuery = `
      SELECT *
      FROM student_table
      WHERE student_id = ?
      `;
    return mysqlConnection.query(myQuery, [id]);
  },

  findByFirstName: async (firstName: string) => {
    const myQuery = `
    SELECT * 
    FROM student_table 
    WHERE student_first_name = ?
    `;

    return mysqlConnection.query(myQuery, [firstName]);
  },

  findByLastName: async (LastName: string) => {
    const myQuery = `
      SELECT * 
      FROM student_table 
      WHERE student_last_name = ?
      `;

    return mysqlConnection.query(myQuery, [LastName]);
  },

  findByEmail: async (Email: string) => {
    const myQuery = `
    SELECT * 
    FROM student_table 
    WHERE email = ?
    `;
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
      INSERT INTO student_table 
      (
        student_first_name, 
        student_last_name, 
        email, 
        date_of_birth, 
        address, 
        phone
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
      FROM student_table
      WHERE student_id = ?
      `;
    return mysqlConnection.query(myQuery, [id]);
  },

  deleteByEmail: async (Email: string) => {
    const myQuery = `
      DELETE 
      FROM student_table 
      WHERE email = ?;
      `;
    return mysqlConnection.query(myQuery, [Email]);
  },

  updateStudentById: async (
    studentObject: IStudentObject,
    studentid: number
  ) => {
    const {
      studentFirstName,
      studentLastName,
      studentEmail,
      studentDateOfBirth,
      studentAddress,
      studentPhone,
    } = studentObject;

    const myQuery = `
      UPDATE student_table
      SET 
        student_first_name = ?,
        student_last_name = ?,
        email = ?,
        date_of_birth = ?,
        address = ?,
        phone = ?
      WHERE student_id = ?;
    `;

    return mysqlConnection.query(myQuery, [
      studentFirstName,
      studentLastName,
      studentEmail,
      studentDateOfBirth,
      studentAddress,
      studentPhone,
      studentid,
    ]);
  },
};

export default studentModel;
