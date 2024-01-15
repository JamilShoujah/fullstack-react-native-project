import {memoize} from 'lodash';
import {computed, observable, runInAction} from 'mobx';
import {TCourse} from '../../shared/data/types/course-object';

export class CourseDeatilsModel {
  courseName = observable.box('');
  coursedescription = observable.box('');

  courseObject = computed(() => {
    const courseObject: TCourse = {
      courseName: this.courseName.get(),
      courseDescription: this.coursedescription.get(),
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
      this.coursedescription.set(text);
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
