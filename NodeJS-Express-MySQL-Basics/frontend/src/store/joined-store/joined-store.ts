import {memoize} from 'lodash';
import {computed, observable, runInAction} from 'mobx';
import {TRegistration} from '../../shared/data/types/registration-object';

export class JoinedDeatilsModel {
  studentId = observable.box('');
  courseId = observable.box('');
  dropStudentId = observable.box('');
  dropCourseId = observable.box('');
  gradeStudentId = observable.box('');
  gradeCourseId = observable.box('');
  studentEmail = observable.box('');
  grade = observable.box('');

  setStudentId(text: string) {
    runInAction(() => {
      this.studentId.set(text);
    });
  }
  setCourseId(text: string) {
    runInAction(() => {
      this.courseId.set(text);
    });
  }
  setGradeStudentId(text: string) {
    runInAction(() => {
      this.gradeStudentId.set(text);
    });
  }
  setGradeCourseId(text: string) {
    runInAction(() => {
      this.gradeCourseId.set(text);
    });
  }
  setDropStudentId(text: string) {
    runInAction(() => {
      this.dropStudentId.set(text);
    });
  }
  setDropCourseId(text: string) {
    runInAction(() => {
      this.dropCourseId.set(text);
    });
  }
  setStudentEmail(text: string) {
    runInAction(() => {
      this.studentEmail.set(text);
    });
  }
  setGrade(text: string) {
    runInAction(() => {
      this.grade.set(text);
    });
  }

  registrationObject = computed(() => {
    const registrationObject: TRegistration = {
      courseId: this.courseId.get(),
      StudentId: this.studentId.get(),
    };
    return registrationObject;
  });
}

const getJoinedDetailStore = memoize(
  () => {
    const joinedDetailModel = new JoinedDeatilsModel();
    return joinedDetailModel;
  },
  () => 1,
);

export default getJoinedDetailStore;
