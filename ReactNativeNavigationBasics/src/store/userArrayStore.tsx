import {computed, observable, runInAction} from 'mobx';
import { memoize } from 'lodash';
import { userArray } from '../Data/UsersArray';
import { IUserInterface } from '../Interfaces/userInterface';


class userArrayModel {
    userArray = observable.array(userArray)

    addToUserArrray(userObject: IUserInterface){
        runInAction(() => {
            this.userArray.push(userObject);
        });
    }
    
  
}

export const getUserArrayStore = memoize(
  () => {
    const userArrayStore = new userArrayModel();
    return userArrayStore;
  },
  () => 1
);

export default { getUserArrayStore };
