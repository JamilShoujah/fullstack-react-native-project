import express, { Request, Response } from "express";
import connection from "./database";
import db from "./database";
const app = express();

function testDatabase() {
  connection.query(
    "SELECT * FROM `ET3Task`.`Student`;",
    (error, results, fields) => {
      if (error) {
        console.error("Error executing query:", error);
        return;
      }
      console.log("Query results:", results);
    }
  );
}

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO WORLD WELCOME TO ET3 LABS");
});

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
