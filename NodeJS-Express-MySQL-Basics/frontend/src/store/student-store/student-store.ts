import {memoize} from 'lodash';
import {computed, observable, runInAction} from 'mobx';
import {TStudent} from '../../shared/data/types/student/student-object';
import {formatNumber} from '../../shared/utils/functions/format-numbers';

export class StudentDeatilsModel {
  firstName = observable.box('');
  lastName = observable.box('');
  emailAddress = observable.box('');
  birthDay = observable.box('');
  birthMonth = observable.box('');
  birthYear = observable.box('');
  phoneNumber = observable.box('');
  address = observable.box('');
  studentId = observable.box('');

  birthDate = computed(() => {
    const day = this.birthDay.get();
    const month = this.birthMonth.get();
    const year = this.birthYear.get();
    return `${year}-${formatNumber(month)}-${formatNumber(day)}`;
  });

  userObject = computed(() => {
    const userObject: TStudent = {
      studentFirstName: this.firstName.get(),
      studentLastName: this.lastName.get(),
      studentEmail: this.emailAddress.get(),
      studentDateOfBirth: this.birthDate.get(),
      studentAddress: this.address.get(),
      studentPhone: this.phoneNumber.get(),
    };
    return userObject;
  });

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
  setBirthDay(text: string) {
    runInAction(() => {
      this.birthDay.set(text);
    });
  }
  setBirthMonth(text: string) {
    runInAction(() => {
      this.birthMonth.set(text);
    });
  }
  setBirthYear(text: string) {
    runInAction(() => {
      this.birthYear.set(text);
    });
  }
  setPhoneNumber(text: string) {
    runInAction(() => {
      this.phoneNumber.set(text);
    });
  }
  setAddress(text: string) {
    runInAction(() => {
      this.address.set(text);
    });
  }
  setStudentId(text: string) {
    runInAction(() => {
      this.studentId.set(text);
    });
  }
}

const getStudentDetailStore = memoize(
  () => {
    const studentDetailModel = new StudentDeatilsModel();
    return studentDetailModel;
  },
  () => 1,
);

export default getStudentDetailStore;
