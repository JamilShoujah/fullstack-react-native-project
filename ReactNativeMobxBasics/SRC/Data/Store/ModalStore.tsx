import {observable, runInAction} from 'mobx';
import {ItemCategory} from '../Types/Enums/ItemCategory';
import {ISuperMarketItem} from '../Types/interfaces/SuperMarketItem';
import memoize from 'lodash/memoize';

class ModalStoreClass {
  isOpen = observable.box(false);
  marketItem = observable.box({
    Icon: '',
    Name: '',
    Price: 0,
    id: 0,
    Category: ItemCategory.dairy,
    AvailableQuantity: 0,
    InCartQuantity: 0,
    DiscountPercentage: 0,
  });

  setIsOpen(newValue: boolean) {
    this.isOpen.set(newValue);
  }

  setMarketItem(newItem: {
    Icon: string;
    Name: string;
    Price: number;
    id: number;
    Category: ItemCategory; // Assuming ItemCategory is an enum or similar
    AvailableQuantity: number;
    InCartQuantity: number;
    DiscountPercentage: number;
  }) {
    this.marketItem.set(newItem);
  }

  openModal(item: ISuperMarketItem) {
    runInAction(() => {
      this.setMarketItem(item);
      this.setIsOpen(true);
    });
  }

  closeModal() {
    runInAction(() => {
      this.setIsOpen(false);
    });
  }
}

export const getModalStore = memoize(() => {
  return new ModalStoreClass();
});
