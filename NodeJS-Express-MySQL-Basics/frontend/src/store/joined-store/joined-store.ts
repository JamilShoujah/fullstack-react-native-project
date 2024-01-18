import {memoize} from 'lodash';
import {computed, observable, runInAction} from 'mobx';
import {TRegistration} from '../../shared/data/types/registration-object';

export class JoinedDeatilsModel {
  studentId = observable.box('');
  courseId = observable.box('');
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
