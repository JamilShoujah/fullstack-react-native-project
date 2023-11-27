import {action, makeObservable, observable} from 'mobx';
import {SuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class ModalVisibilityClass {
  isOpen: boolean = false;
  MarketItem!: SuperMarketItem;

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      OpenModal: action,
      CloseModal: action,
    });
  }

  OpenModal(item: SuperMarketItem) {
    this.MarketItem = item;
    this.isOpen = true;
  }

  CloseModal() {
    this.isOpen = false;
  }
}

export const ModalVisible = new ModalVisibilityClass();
