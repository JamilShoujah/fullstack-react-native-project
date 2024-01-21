import express, { Request, Response } from "express";
import studentRoutes from "./controllers/student-controller/index";
import courseRoutes from "./controllers/course-controller/index";
import dataRoutes from "./controllers/student-course-controller/index";
const app = express();

app.use(express.json());
app.use("/api/student", studentRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/data", dataRoutes);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
