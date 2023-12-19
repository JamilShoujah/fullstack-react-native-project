import {computed, observable, runInAction} from 'mobx';
import {memoize} from 'lodash';
import {usersArray} from '../constants/UsersArray';
import {IUserInterface} from '../Interfaces/userInterface';

class userArrayModel {
  userArray = observable.array(usersArray);
  userObjectId = observable.box(0);
  userObject = observable.box({
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    religion: '',
  });

  userArrayMinusCurrentUser = computed(() => {
    const filteredArray: IUserInterface[] = this.userArray.filter(
      user => user.id !== this.userObjectId.get(),
    );
    return filteredArray;
  });

  addToUserArrray(userObject: IUserInterface) {
    runInAction(() => {
      this.userArray.push(userObject);
    });
  }

  setUserObject(userItem: IUserInterface) {
    runInAction(() => {
      this.userObject.set(userItem);
      this.userObjectId.set(userItem.id);
    });
  }
}

export const getUserArrayStore = memoize(
  () => {
    const userArrayStore = new userArrayModel();
    return userArrayStore;
  },
  () => 1,
);

export default {getUserArrayStore};
