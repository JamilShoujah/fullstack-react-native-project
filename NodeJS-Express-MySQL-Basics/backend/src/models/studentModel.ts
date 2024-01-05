import connection from "../database";

const UserModel = {
  findAll: async () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Student", (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  findById: async (id: number) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Student WHERE StudentID = ?";
      connection.query(query, [id], (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  },

  findByFirstName: async (Name: string) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Student WHERE StudentFirstName = ?";
      connection.query(query, [Name], (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  },
};

export default UserModel;
