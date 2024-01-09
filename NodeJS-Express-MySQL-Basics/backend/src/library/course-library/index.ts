import { memoize } from "lodash";
import courseModel from "../../models/course-model";

class courseLibraryModel {
  allCourses() {
    return courseModel.findAll();
  }

  courseIdParams(id: number) {
    return courseModel.findById(id);
  }
}

const getCourseLibrary = memoize(() => {
  const library = new courseLibraryModel();
  return library;
});

export default getCourseLibrary;
