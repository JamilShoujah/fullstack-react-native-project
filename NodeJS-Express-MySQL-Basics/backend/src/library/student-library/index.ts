import { memoize } from "lodash";
import studentModel from "../../models/student-model";
import StudentModel from "../../models/student-model";
import { IStudentObject } from "../../types/interfaces/studentObject";

class StudentLibraryModel {
  allStudents() {
    return studentModel.findAll();
  }

  studentIdParams(studentId: number) {
    return StudentModel.findById(studentId);
  }

  studentFirstNameParams(Name: string) {
    return StudentModel.findByFirstName(Name);
  }

  studentLastNameParams(Name: string) {
    return StudentModel.findByLastName(Name);
  }

  studentEmailParams(Email: string) {
    return StudentModel.findByEmail(Email);
  }

  newStudentParams(studentObject: IStudentObject) {
    return studentModel.addNewStudent(studentObject);
  }

  deleteByStudentIdParams(studentId: number) {
    return StudentModel.deleteById(studentId);
  }

  deleteByStudentEmailParams(Email: string) {
    return StudentModel.deleteByEmail(Email);
  }

  updateStudentParams(studentObject: IStudentObject, id: number) {
    return studentModel.updateStudentById(studentObject, id);
  }
}

const getStudentLibrary = memoize(() => {
  const library = new StudentLibraryModel();
  return library;
});

export default getStudentLibrary;
