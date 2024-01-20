import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

export class PageModal {
  courseModalVisible = observable.box(false);
  studentModalVisible = observable.box(false);
  joinedModalVisible = observable.box(false);

  changeCourseModalVisibility(val: boolean) {
    runInAction(() => {
      this.courseModalVisible.set(val);
    });
  }
  changeStudentModalVisibility(val: boolean) {
    runInAction(() => {
      this.studentModalVisible.set(val);
    });
  }
  changeJoinedModalVisibility(val: boolean) {
    runInAction(() => {
      this.joinedModalVisible.set(val);
    });
  }
}

export const getGetPageModalStore = memoize(
  () => {
    const getPageModal = new PageModal();
    return getPageModal;
  },
  () => 1,
);

export const getPutPageModalStore = memoize(
  () => {
    const putPageModal = new PageModal();
    return putPageModal;
  },
  () => 1,
);
