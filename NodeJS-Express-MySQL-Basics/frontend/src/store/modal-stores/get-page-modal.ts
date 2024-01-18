import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

export class GetPageModal {
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

const getGetPageModalStore = memoize(
  () => {
    const getPageModal = new GetPageModal();
    return getPageModal;
  },
  () => 1,
);

export default getGetPageModalStore;
