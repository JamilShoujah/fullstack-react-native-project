import {memoize} from 'lodash';
import {computed, observable, runInAction} from 'mobx';
import {TCourse} from '../../shared/data/types/course-object';

export class CourseDeatilsModel {
  courseName = observable.box('');
  courseDescription = observable.box('');
  courseID = observable.box('');

  courseObject = computed(() => {
    const courseObject: TCourse = {
      courseName: this.courseName.get(),
      courseDescription: this.courseDescription.get(),
    };
    return courseObject;
  });

  setCourseName(text: string) {
    runInAction(() => {
      this.courseName.set(text);
    });
  }
  setCourseDescription(text: string) {
    runInAction(() => {
      this.courseDescription.set(text);
    });
  }

  setCourseId(text: string) {
    runInAction(() => {
      this.courseID.set(text);
    });
  }
}

const getCourseDetailStore = memoize(
  () => {
    const courseDetailModel = new CourseDeatilsModel();
    return courseDetailModel;
  },
  () => 1,
);

export default getCourseDetailStore;
