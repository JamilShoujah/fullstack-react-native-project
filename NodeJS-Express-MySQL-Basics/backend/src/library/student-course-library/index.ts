import { memoize } from "lodash";
import studentCourseModel from "../../models/student-course-model";

class gradesLibraryModel {
  allGrades() {
    return studentCourseModel.getAll();
  }

  studentGrades(id: number) {
    return studentCourseModel.getGradesByStudent(id);
  }

  courseGrades(id: number) {
    return studentCourseModel.getGradesByCourse(id);
  }

  coursesByStudentId(id: number) {
    return studentCourseModel.getCoursesByStudent(id);
  }
  studentsByCourseId(id: number) {
    return studentCourseModel.getStudentsByCourse(id);
  }
}

const getGradesLibrary = memoize(() => {
  const library = new gradesLibraryModel();
  return library;
});

export default getGradesLibrary;
