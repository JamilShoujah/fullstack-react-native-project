import { memoize } from "lodash";
import mysqlConnection from "../../database";

class StudentCourseModel {
  async getAll() {
    const myQuery = `
      SELECT 
        student_table.student_first_name, 
        student_table.student_last_name, 
        course_table.course_name, 
        student_course_table.grade
      FROM student_course_table
      JOIN student_table 
      ON student_course_table.student_id = student_table.student_id
      JOIN course_table 
      ON student_course_table.course_id = course_table.course_id;
    `;

    return mysqlConnection.query(myQuery);
  }

  async getGradesByStudent(id: number) {
    const myQuery = `
      SELECT 
        student_table.student_first_name, 
        student_table.student_last_name, 
        course_table.course_name, 
        student_course_table.grade
      FROM student_course_table
      JOIN student_table 
      ON student_course_table.student_id = student_table.student_id
      JOIN course_table 
      ON student_course_table.course_id = course_table.course_id
      WHERE student_course_table.student_id = ?
    `;

    return mysqlConnection.query(myQuery, [id]);
  }

  async getGradesByCourse(id: number) {
    const myQuery = `
      SELECT 
        student_table.student_first_name, 
        student_table.student_last_name, 
        course_table.course_name, 
        student_course_table.grade
      FROM student_course_table
      JOIN student_table 
      ON student_course_table.student_id = student_table.student_id
      JOIN course_table 
      ON student_course_table.course_id = course_table.course_id
      WHERE student_course_table.course_id = ?
    `;

    return mysqlConnection.query(myQuery, [id]);
  }

  async getCoursesByStudent(id: number) {
    const myQuery = `
      SELECT 
        course_table.course_id, 
        course_table.course_name, 
        course_table.course_description
      FROM student_course_table
      JOIN course_table ON student_course_table.course_id = course_table.course_id
      WHERE student_course_table.student_id = ?;
  `;

    return mysqlConnection.query(myQuery, [id]);
  }

  async getStudentsByCourse(id: number) {
    const myQuery = `
      SELECT 
        student_table.student_first_name, 
        student_table.student_last_name, 
        student_table.student_id, 
        student_table.email
      FROM student_course_table
      JOIN student_table ON student_course_table.student_id = student_table.student_id
      WHERE student_course_table.course_id = ?;
  `;

    return mysqlConnection.query(myQuery, [id]);
  }

  async registerForCourse(studentId: number, courseId: number) {
    const myQuery = `
      INSERT INTO student_course_table 
        (
          student_id, 
          course_id, 
          grade
        )
      VALUES (?, ?, 'N/A');
    `;

    return mysqlConnection.query(myQuery, [studentId, courseId]);
  }

  async dropStudentFromCourse(studentId: number, courseId: number) {
    const myQuery = `
      DELETE FROM student_course_table
      WHERE student_id = ? AND course_id = ?;
    `;

    return mysqlConnection.query(myQuery, [studentId, courseId]);
  }

  async updateGrades(studentId: number, courseId: number, grade: string) {
    const myQuery = `
      UPDATE student_course_table
      SET grade = ?
      WHERE student_id = ? AND course_id = ?;
    `;
    console.log(courseId);
    console.log(studentId, grade);
    return mysqlConnection.query(myQuery, [grade, studentId, courseId]);
  }
}

const getStudentCourseModel = memoize(
  () => {
    const studnetCourseModel = new StudentCourseModel();
    return studnetCourseModel;
  },
  () => 1
);

export default getStudentCourseModel;
