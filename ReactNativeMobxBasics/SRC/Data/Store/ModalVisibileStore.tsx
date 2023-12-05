import {action, makeObservable, observable} from 'mobx';
import {ItemCategory} from '../Types/Enums/ItemCategory';
import {ISuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class ModalVisibilityClass {
  isOpen: boolean = false;
  MarketItem: ISuperMarketItem = {
    Icon: '',
    Name: '',
    Price: 0,
    id: 0,
    Category: ItemCategory.Dairy,
    AvailableQuantity: 0,
    InCartQuantity: 0,
    DiscountPercentage: 0,
  };

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      MarketItem: observable,
      OpenModal: action,
      CloseModal: action,
    });
  }

  OpenModal(item: ISuperMarketItem) {
    this.MarketItem = item;
    this.isOpen = true;
  }

  CloseModal() {
    this.isOpen = false;
  }
}

export const ModalVisible = new ModalVisibilityClass();
