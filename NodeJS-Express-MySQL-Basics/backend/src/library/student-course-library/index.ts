import { memoize } from "lodash";
import getStudentCourseModel from "../../models/student-course-model";
import { IGradeObject } from "../../types/interfaces/gradeObject";

const studentCourseModel = getStudentCourseModel();

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

  registerStudentToCourse(studentId: number, courseId: number) {
    return studentCourseModel.registerForCourse(studentId, courseId);
  }

  dropStudentFromCourse(studentId: number, courseId: number) {
    return studentCourseModel.dropStudentFromCourse(studentId, courseId);
  }

  updateStudentGrade(studentId: number, courseId: number, grade: string) {
    return studentCourseModel.updateGrades(studentId, courseId, grade);
  }

  updateMultipleStudentGrade(courseId: number, gradeObject: IGradeObject) {
    const { studentId, grade } = gradeObject;
    return studentCourseModel.updateGrades(studentId, courseId, grade);
  }
}

const getGradesLibrary = memoize(() => {
  const library = new gradesLibraryModel();
  return library;
});

export default getGradesLibrary;
