import mysqlConnection from "../../database";
import { ICourseObject } from "../../types/interfaces/courseObject";
import { IStudentObject } from "../../types/interfaces/studentObject";

const courseModel = {
  findAll: async () => {
    const myQuery = `
    SELECT * 
    FROM course
    `;
    return mysqlConnection.query(myQuery);
  },

  findById: async (id: number) => {
    const myQuery = `
    SELECT * 
    FROM course 
    WHERE CourseID = ?
    `;

    return mysqlConnection.query(myQuery, [id]);
  },
  findByName: async (Name: string) => {
    const myQuery = `
    SELECT * 
    FROM course 
    WHERE CourseName = ?
    `;

    return mysqlConnection.query(myQuery, [Name]);
  },

  addNewCourse: async (courseObject: ICourseObject) => {
    const { courseName, courseDescription } = courseObject;

    const myQuery = `
        INSERT INTO course 
        (
        CourseName, 
        courseDescription
        ) 
        VALUES 
        (?, ?)
    `;

    return mysqlConnection.query(myQuery, [courseName, courseDescription]);
  },

  deleteById: async (id: number) => {
    const myQuery = `
    DELETE 
    FROM course 
    WHERE CourseID = ?
    `;

    return mysqlConnection.query(myQuery, [id]);
  },

  updateCourse: async (courseObject: ICourseObject, id: number) => {
    const { courseName, courseDescription } = courseObject;
    const myQuery = `
      UPDATE course
      SET 
        CourseName = ?,
        courseDescription = ?
      WHERE CourseID = ?;
    `;

    return mysqlConnection.query(myQuery, [courseName, courseDescription, id]);
  },
};

export default courseModel;
