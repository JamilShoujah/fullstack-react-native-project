import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ET3Task",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Successfully connected to the database.");
});

export default connection;
