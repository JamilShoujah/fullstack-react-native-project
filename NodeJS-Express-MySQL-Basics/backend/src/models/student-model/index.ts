import { memoize } from "lodash";
import mysqlConnection from "../../database";
import { IStudentObject } from "../../types/interfaces/studentObject";

class StudentModel {
  async findAll() {
    const myQuery = `
    SELECT * 
    FROM student_table
    `;
    return mysqlConnection.query(myQuery);
  }

  async findById(id: number) {
    const myQuery = `
      SELECT *
      FROM student_table
      WHERE student_id = ?
      `;
    return mysqlConnection.query(myQuery, [id]);
  }

  async findByFirstName(firstName: string) {
    const myQuery = `
    SELECT * 
    FROM student_table 
    WHERE student_first_name = ?
    `;

    return mysqlConnection.query(myQuery, [firstName]);
  }

  async findByLastName(LastName: string) {
    const myQuery = `
      SELECT * 
      FROM student_table 
      WHERE student_last_name = ?
      `;

    return mysqlConnection.query(myQuery, [LastName]);
  }

  async findByEmail(Email: string) {
    const myQuery = `
    SELECT * 
    FROM student_table 
    WHERE email = ?
    `;
    return mysqlConnection.query(myQuery, [Email]);
  }

  async addNewStudent(studentObject: IStudentObject) {
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
  }

  async deleteById(id: number) {
    try {
      const deleteReferencingRowsQuery = `
            DELETE FROM student_course_table 
            WHERE student_id = ?;
        `;
      await mysqlConnection.query(deleteReferencingRowsQuery, [id]);

      const deleteStudentQuery = `
            DELETE 
            FROM student_table 
            WHERE student_id = ?;
        `;
      await mysqlConnection.query(deleteStudentQuery, [id]);
    } catch (error) {
      throw error;
    }
  }

  async deleteByEmail(Email: string) {
    try {
      const deleteReferencingRowsQuery = `
            DELETE FROM student_course_table 
            WHERE student_id IN (
                SELECT student_id 
                FROM student_table 
                WHERE email = ?
            );
        `;
      await mysqlConnection.query(deleteReferencingRowsQuery, [Email]);

      const deleteStudentQuery = `
            DELETE 
            FROM student_table 
            WHERE email = ?;
        `;
      await mysqlConnection.query(deleteStudentQuery, [Email]);
    } catch (error) {
      throw error;
    }
  }

  async updateStudentById(studentObject: IStudentObject, studentid: number) {
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
  }
}

const getStudentModel = memoize(
  () => {
    const studnetModel = new StudentModel();
    return studnetModel;
  },
  () => 1
);

export default getStudentModel;
