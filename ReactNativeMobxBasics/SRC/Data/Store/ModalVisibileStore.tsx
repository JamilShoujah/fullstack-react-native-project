import {action, makeObservable, observable} from 'mobx';

class ModalVisibilityClass {
  isOpen: boolean = false;

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      OpenModal: action,
      CloseModal: action,
    });
  }

  OpenModal() {
    this.isOpen = true;
  }

  CloseModal() {
    this.isOpen = false;
  }
}

export const ModalVisible = new ModalVisibilityClass();
