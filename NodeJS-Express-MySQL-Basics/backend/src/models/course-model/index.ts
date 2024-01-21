import mysqlConnection from "../../database";
import { ICourseObject } from "../../types/interfaces/courseObject";

const courseModel = {
  findAll: async () => {
    const myQuery = `
    SELECT * 
    FROM course_table
    `;
    return mysqlConnection.query(myQuery);
  },

  findById: async (id: number) => {
    const myQuery = `
    SELECT * 
    FROM course_table 
    WHERE course_id = ?
    `;

    return mysqlConnection.query(myQuery, [id]);
  },
  findByName: async (Name: string) => {
    const myQuery = `
    SELECT * 
    FROM course_table 
    WHERE course_name = ?
    `;

    return mysqlConnection.query(myQuery, [Name]);
  },

  addNewCourse: async (courseObject: ICourseObject) => {
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
  },

  deleteById: async (id: number) => {
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
  },

  updateCourse: async (courseObject: ICourseObject, id: number) => {
    const { courseName, courseDescription } = courseObject;
    const myQuery = `
      UPDATE course_table
      SET 
        course_name = ?,
        course_description = ?
      WHERE course_id = ?;
    `;

    return mysqlConnection.query(myQuery, [courseName, courseDescription, id]);
  },
};

export default courseModel;
