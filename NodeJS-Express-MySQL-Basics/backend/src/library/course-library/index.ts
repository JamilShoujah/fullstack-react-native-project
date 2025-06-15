import { memoize } from "lodash";
import getCourseModel from "../../models/course-model";
import { ICourseObject } from "../../types/interfaces/courseObject";

const courseModel = getCourseModel();

class courseLibraryModel {
  allCourses() {
    return courseModel.findAll();
  }

  courseIdParams(id: number) {
    return courseModel.findById(id);
  }

  courseNameParams(Name: string) {
    return courseModel.findByName(Name);
  }

  newCourseParams(courseObject: ICourseObject) {
    return courseModel.addNewCourse(courseObject);
  }

  deleteCourseByIdParams(id: number) {
    return courseModel.deleteById(id);
  }
  updateCourseParams(courseObject: ICourseObject, id: number) {
    return courseModel.updateCourse(courseObject, id);
  }
}

const getCourseLibrary = memoize(() => {
  const library = new courseLibraryModel();
  return library;
});

export default getCourseLibrary;
