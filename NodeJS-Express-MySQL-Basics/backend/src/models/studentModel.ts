import mysqlConnection from "../database";
import connection from "../database";
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
    const query = "SELECT * FROM Student WHERE Email = ?";
    return connection.query(query, [Email]);
  },
};

//   // started from here
//   addNewStudent: async (studentObject: IStudentObject) => {
//     const {
//       studentFirstName,
//       studentLastName,
//       studentEmail,
//       studentDateOfBirth,
//       studentAddress,
//       studentPhone,
//     } = studentObject;

//     return new Promise((resolve, reject) => {
//       const query =
//         "INSERT INTO Student (StudentFirstName, StudentLastName, Email, DateOfBirth, Address, Phone) VALUES (?, ?, ?, ?, ?, ?);";

//        .query(
//         query,
//         [
//           studentFirstName,
//           studentLastName,
//           studentEmail,
//           studentDateOfBirth,
//           studentAddress,
//           studentPhone,
//         ],
//         (error, result) => {
//           if (error) {
//             return reject(error);
//           }
//           resolve(result);
//         }
//       );
//     });
//   },
// };

export default studentModel;
