import { memoize } from "lodash";
import StudentModel from "../../models/studentModel";

class StudentLibraryModel {
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
}

const getStudentLibrary = memoize(() => {
  const library = new StudentLibraryModel();
  return library;
});

export default getStudentLibrary;
