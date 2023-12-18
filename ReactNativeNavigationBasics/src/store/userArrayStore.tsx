import {observable, runInAction} from 'mobx';
import {memoize} from 'lodash';
import {usersArray} from '../Data/UsersArray';
import {IUserInterface} from '../Interfaces/userInterface';

class userArrayModel {
  userArray = observable.array(usersArray);
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

  addToUserArrray(userObject: IUserInterface) {
    runInAction(() => {
      this.userArray.push(userObject);
    });
  }

  setUserObject(userItem: IUserInterface) {
    runInAction(() => {
      this.userObject.set(userItem);
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
