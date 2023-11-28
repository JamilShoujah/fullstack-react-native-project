/* eslint-disable @typescript-eslint/no-shadow */
import {action, computed, makeObservable, observable} from 'mobx';
import {SuperMarketItems} from '../Arrays/SuperMarketItems';
import {SuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class SuperMarketArray {
  SuperMarketArrayItems: SuperMarketItem[] = SuperMarketItems;
  CartArrayItems: SuperMarketItem[] = [];
  count: number = 0;
  constructor() {
    makeObservable(this, {
      SuperMarketArrayItems: observable,
      CartArrayItems: observable,
      Count: computed,
      AddItemToCart: action,
      RemoveItemfromCart: action,
      CancelPurchase: action,
      AddToCart: action,
    });
  }
  get Count() {
    return this.SuperMarketArrayItems.length;
  }

  AddItemToCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.AvailableQuantity > 0) {
        item.InCartQuantity += 1;
      } else {
        console.log('No more items');
      }
    }
  }

  RemoveItemfromCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.InCartQuantity > 0) {
        item.InCartQuantity -= 1;
        this.count++;
      } else {
        console.log('No items in cart');
      }
    }
  }

  CancelPurchase(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    const InCartItem = this.CartArrayItems.find(item => item.id === itemId);
    if (item) {
      if (InCartItem) {
        item.InCartQuantity = InCartItem.InCartQuantity;
      }
    }
  }

  AddToCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    const InCartItem = this.CartArrayItems.find(item => item.id === itemId);
    if (item && InCartItem && InCartItem.InCartQuantity <= 0) {
      const index = this.CartArrayItems.findIndex(item => item.id === itemId);
      item.AvailableQuantity += this.count;
      this.CartArrayItems.splice(index, 1);
    }
    if (item && item.InCartQuantity > 0) {
      item.AvailableQuantity -= item.InCartQuantity;
      if (!InCartItem) {
        this.CartArrayItems.push(item);
      }
    }
  }
}

export const supermarketItemsStore = new SuperMarketArray();
