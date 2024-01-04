import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

export class InputTextFieldModel {
  studentId = observable.box('');
  firstName = observable.box('');
  lastName = observable.box('');
  emailAddress = observable.box('');
  courseName = observable.box('');
  courseId = observable.box('');

  setStudentId(text: string) {
    runInAction(() => {
      this.studentId.set(text);
    });
  }
  setFirstName(text: string) {
    runInAction(() => {
      this.firstName.set(text);
    });
  }
  setLastName(text: string) {
    runInAction(() => {
      this.lastName.set(text);
    });
  }
  setEmailAddress(text: string) {
    runInAction(() => {
      this.emailAddress.set(text);
    });
  }
  setCourseName(text: string) {
    runInAction(() => {
      this.courseName.set(text);
    });
  }
  setCourseId(text: string) {
    runInAction(() => {
      this.courseId.set(text);
    });
  }
}

const getInputFieldStore = memoize(
  () => {
    const InputTextField = new InputTextFieldModel();
    return InputTextField;
  },
  () => 1,
);

export default getInputFieldStore;
