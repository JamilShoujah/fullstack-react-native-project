import mysqlConnection from "../database";
import connection from "../database";
import { IStudentObject } from "../types/interfaces/studentObject";

const StudentModel = {
  findAll: async () => {
    const myQuery = "SELECT * FROM Student";
    return mysqlConnection.query(myQuery);
  },
  findById: async (id: number) => {
    const myQuery = `
      SELECT *
      FROM Student
      WHERE StudentID = ${id}
      `;
    return connection.query(myQuery);
  },
};
//   findByFirstName: async (Name: string) => {
//     return new Promise((resolve, reject) => {
//       const query = "SELECT * FROM Student WHERE StudentFirstName = ?";
//       connection.query(query, [Name], (error, result) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(result);
//       });
//     });
//   },

//   findByLastName: async (Name: string) => {
//     return new Promise((resolve, reject) => {
//       const query = "SELECT * FROM Student WHERE StudentLastName = ?";
//       connection.query(query, [Name], (error, result) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(result);
//       });
//     });
//   },

//   findByEmail: async (Email: string) => {
//     return new Promise((resolve, reject) => {
//       const query = "SELECT * FROM Student WHERE Email = ?";
//       connection.query(query, [Email], (error, result) => {
//         if (error) {
//           return reject(error);
//         }
//         resolve(result);
//       });
//     });
//   },
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

export default StudentModel;
