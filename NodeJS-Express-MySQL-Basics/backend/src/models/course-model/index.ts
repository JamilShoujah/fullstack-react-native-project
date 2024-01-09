import mysqlConnection from "../../database";
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
};

export default courseModel;
