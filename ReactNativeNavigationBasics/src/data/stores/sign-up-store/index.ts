import {computed, observable, runInAction} from 'mobx';
import {memoize} from 'lodash';
import {EGender} from '../../types/enums/genderEnum';
import {EReligion} from '../../types/enums/religionEnum';
import {IUserInterface} from '../../types/Interfaces/userInterface';

class signInModel {
  emailValue = observable.box('');
  passwordValue = observable.box('');
  verifyPasswordValue = observable.box('');
  firstName = observable.box('');
  lastName = observable.box('');
  age = observable.box('');
  gender = observable.box(EGender.NO);
  religion = observable.box(EReligion.NO);

  passwordsAreSame = computed(() => {
    if (this.verifyPasswordValue.get() === this.passwordValue.get()) {
      return true;
    } else {
      return false;
    }
  });

  setEmailValue(emailInputValue: string) {
    runInAction(() => {
      this.emailValue.set(emailInputValue);
    });
  }

  setPasswordValue(passwordInputValue: string) {
    runInAction(() => {
      this.passwordValue.set(passwordInputValue);
    });
  }

  setVerifyPasswordValue(verifyPasswordInputValue: string) {
    runInAction(() => {
      this.verifyPasswordValue.set(verifyPasswordInputValue);
    });
  }

  setFirstName(firstNameInputValue: string) {
    runInAction(() => {
      this.firstName.set(firstNameInputValue);
    });
  }

  setLastName(lastNameInputValue: string) {
    runInAction(() => {
      this.lastName.set(lastNameInputValue);
    });
  }

  setAge(ageInput: string) {
    runInAction(() => {
      this.age.set(ageInput);
    });
  }

  setGender(genderInput: EGender) {
    runInAction(() => {
      this.gender.set(genderInput);
    });
  }
  setReligion(religionInput: EReligion) {
    runInAction(() => {
      this.religion.set(religionInput);
    });
  }

  createUserObject() {
    const userObject: IUserInterface = {
      id: Date.now(),
      email: this.emailValue.get(),
      password: this.passwordValue.get(),
      firstName: this.firstName.get(),
      lastName: this.lastName.get(),
      age: parseInt(this.age.get(), 10),
      gender: this.gender.get(),
      religion: this.religion.get(),
    };

    return userObject;
  }
}

export const getSignUpStore = memoize(
  () => {
    const signUpStore = new signInModel();
    return signUpStore;
  },
  () => 1,
);

export default {getSignUpStore};
