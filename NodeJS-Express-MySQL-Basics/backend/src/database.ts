import mysql, { Connection } from "mysql2";
import { resolve } from "path";

const mysqlConnection = {
  instance: null as Connection | null,
  getInstance(): Connection {
    if (this.instance === null) {
      this.instance = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "ET3Task",
      });

      this.instance.connect((err) => {
        if (err) {
          console.error("MySQL connection error: ", err);
          this.instance = null;
          throw err;
        }
      });
    }
    return this.instance;
  },
  query(queryString: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const connection = this.getInstance();
        connection.query(queryString, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default mysqlConnection;
