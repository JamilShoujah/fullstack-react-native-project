import express, { Request, Response } from "express";
import studentRoutes from "./controllers/student";
const app = express();

app.use(express.json());
app.use("/api/student", studentRoutes);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
