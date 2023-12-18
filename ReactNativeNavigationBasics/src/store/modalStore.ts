import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';
import {IUserInterface} from '../Interfaces/userInterface';
import {EGender} from '../enums/genderEnum';
import {EReligion} from '../enums/religionEnum';

class ModalStoreClass {
  isOpen = observable.box(false);

  item = observable.box({
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: EGender.NO,
    religion: EReligion.NO,
  });

  setUserObject(userItem: IUserInterface) {
    runInAction(() => {
      this.item.set(userItem);
    });
  }

  setIsOpen(newValue: boolean) {
    this.isOpen.set(newValue);
  }

  openModal() {
    runInAction(() => {
      this.setIsOpen(true);
    });
  }
  closeModal() {
    runInAction(() => {
      this.setIsOpen(false);
    });
  }
}
export const getModalStore = memoize(
  () => {
    const modalStore = new ModalStoreClass();
    return modalStore;
  },
  () => 1,
);

export default {getModalStore};
