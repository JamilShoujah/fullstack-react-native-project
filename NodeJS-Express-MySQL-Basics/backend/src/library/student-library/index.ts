import { memoize } from "lodash";
import getStudentModel from "../../models/student-model";
import { IStudentObject } from "../../types/interfaces/studentObject";

const studentModel = getStudentModel();

class StudentLibraryModel {
  allStudents() {
    return studentModel.findAll();
  }

  studentIdParams(studentId: number) {
    return studentModel.findById(studentId);
  }

  studentFirstNameParams(Name: string) {
    return studentModel.findByFirstName(Name);
  }

  studentLastNameParams(Name: string) {
    return studentModel.findByLastName(Name);
  }

  studentEmailParams(Email: string) {
    return studentModel.findByEmail(Email);
  }

  newStudentParams(studentObject: IStudentObject) {
    return studentModel.addNewStudent(studentObject);
  }

  deleteByStudentIdParams(studentId: number) {
    return studentModel.deleteById(studentId);
  }

  deleteByStudentEmailParams(Email: string) {
    return studentModel.deleteByEmail(Email);
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
