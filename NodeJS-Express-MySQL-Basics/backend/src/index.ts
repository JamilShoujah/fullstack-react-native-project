import express, { Request, Response } from "express";
import studentRoutes from "./routes/studentRoutes";
const app = express();

app.use("/api", studentRoutes);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
