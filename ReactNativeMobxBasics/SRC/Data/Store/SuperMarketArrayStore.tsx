/* eslint-disable @typescript-eslint/no-shadow */
import {action, computed, makeObservable, observable} from 'mobx';
import {SuperMarketItems} from '../Arrays/SuperMarketItems';
import {SuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class SuperMarketArray {
  SuperMarketArrayItems: SuperMarketItem[] = SuperMarketItems;

  constructor() {
    makeObservable(this, {
      SuperMarketArrayItems: observable,
      Count: computed,
      UpdateQuantity: action,
    });
  }
  get Count() {
    return this.SuperMarketArrayItems.length;
  }

  UpdateQuantity(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      item.AvailableQuantity -= 1;
    }
  }
}

export const supermarketItemsStore = new SuperMarketArray();
