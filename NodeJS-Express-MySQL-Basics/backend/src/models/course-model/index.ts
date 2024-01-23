import { memoize } from "lodash";
import mysqlConnection from "../../database";
import { ICourseObject } from "../../types/interfaces/courseObject";

class CourseModel {
  async findAll() {
    const myQuery = `
    SELECT * 
    FROM course_table
    `;
    return mysqlConnection.query(myQuery);
  }

  async findById(id: number) {
    const myQuery = `
    SELECT * 
    FROM course_table 
    WHERE course_id = ?
    `;
    return mysqlConnection.query(myQuery, [id]);
  }

  async findByName(Name: string) {
    const myQuery = `
    SELECT * 
    FROM course_table 
    WHERE course_name = ?
    `;

    return mysqlConnection.query(myQuery, [Name]);
  }

  async addNewCourse(courseObject: ICourseObject) {
    const { courseName, courseDescription } = courseObject;

    const myQuery = `
        INSERT INTO course_table 
        (
        course_name, 
        course_description
        ) 
        VALUES 
        (?, ?)
    `;

    return mysqlConnection.query(myQuery, [courseName, courseDescription]);
  }

  async deleteById(id: number) {
    try {
      const deleteReferencingRowsQuery = `
            DELETE FROM student_course_table 
            WHERE course_id = ?;
        `;
      await mysqlConnection.query(deleteReferencingRowsQuery, [id]);

      const deleteCourseQuery = `
            DELETE 
            FROM course_table 
            WHERE course_id = ?;
        `;
      await mysqlConnection.query(deleteCourseQuery, [id]);
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(courseObject: ICourseObject, id: number) {
    const { courseName, courseDescription } = courseObject;
    const myQuery = `
      UPDATE course_table
      SET 
        course_name = ?,
        course_description = ?
      WHERE course_id = ?;
    `;

    return mysqlConnection.query(myQuery, [courseName, courseDescription, id]);
  }
}

const getCourseModel = memoize(
  () => {
    const courseModel = new CourseModel();
    return courseModel;
  },
  () => 1
);

export default getCourseModel;
