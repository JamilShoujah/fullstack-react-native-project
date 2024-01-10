import mysqlConnection from "../../database";

const studentCourseModel = {
  getAll: async () => {
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
  },

  getGradesByStudent: async (id: number) => {
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
  },

  getGradesByCourse: async (id: number) => {
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
  },

  getCoursesByStudent: async (id: number) => {
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
  },

  getStudentsByCourse: async (id: number) => {
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
  },
};

export default studentCourseModel;
