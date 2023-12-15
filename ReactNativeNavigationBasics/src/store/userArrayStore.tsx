import {computed, observable, runInAction} from 'mobx';
import {memoize} from 'lodash';
import {usersArray} from '../Data/UsersArray';
import {IUserInterface} from '../Interfaces/userInterface';

class userArrayModel {
  userArray = observable.array(usersArray);
  userId = observable.box(0);

  addToUserArrray(userObject: IUserInterface) {
    runInAction(() => {
      this.userArray.push(userObject);
    });
  }
  setUserId(userId: number) {
    runInAction(() => {
      this.userId.set(userId);
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
