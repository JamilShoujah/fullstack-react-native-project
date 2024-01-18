import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

export class JoinedDeatilsModel {
  studentId = observable.box('');
  courseId = observable.box('');

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
}

const getJoinedDetailStore = memoize(
  () => {
    const joinedDetailModel = new JoinedDeatilsModel();
    return joinedDetailModel;
  },
  () => 1,
);

export default getJoinedDetailStore;
