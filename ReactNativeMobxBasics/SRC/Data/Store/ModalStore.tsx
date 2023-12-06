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
    Category: ItemCategory.Dairy,
    AvailableQuantity: 0,
    InCartQuantity: 0,
    DiscountPercentage: 0,
  });

  get getIsOpen() {
    return this.isOpen.get();
  }

  get getMarketItem() {
    return this.marketItem.get();
  }

  openModal(item: ISuperMarketItem) {
    runInAction(() => {
      this.marketItem.set(item);
      this.isOpen.set(true);
    });
  }

  closeModal() {
    runInAction(() => {
      this.isOpen.set(false);
    });
  }
}

export const getModalStore = memoize(() => {
  return new ModalStoreClass();
});
