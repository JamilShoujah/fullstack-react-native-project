/* eslint-disable @typescript-eslint/no-shadow */
import {action, makeObservable, observable} from 'mobx';
import {SuperMarketItems} from '../Arrays/SuperMarketItems';
import {SuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class SuperMarketArray {
  SuperMarketArrayItems: SuperMarketItem[] = SuperMarketItems;
  CartArrayItems: SuperMarketItem[] = [];
  ItemCounter: number = 0;
  count: number = 0;
  defaultvalue: number = 0;
  constructor() {
    makeObservable(this, {
      SuperMarketArrayItems: observable,
      CartArrayItems: observable,
      ItemCounter: observable,
      AddItemToCart: action,
      RemoveItemfromCart: action,
      CancelPurchase: action,
      AddtoCart: action,
    });
  }

  AddItemToCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.AvailableQuantity > 0) {
        // item.InCartQuantity += 1;
        this.ItemCounter++;
      } else {
        console.log('No more items');
      }
    }
  }

  RemoveItemfromCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.InCartQuantity > 0) {
        // item.InCartQuantity -= 1;
        this.ItemCounter--;
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
      this.ItemCounter = 0;
      if (InCartItem) {
        item.InCartQuantity = InCartItem.InCartQuantity;
      }
    }
  }

  AddtoCart(itemId: number) {
    const item = this.SuperMarketArrayItems.find(item => item.id === itemId);
    console.log('test');
    if (this.CartArrayItems.length === 0) {
      if (item) {
        const newItem = item;
        newItem.InCartQuantity = this.ItemCounter;
        this.CartArrayItems.push(newItem);
        item.AvailableQuantity -= this.ItemCounter;
        // console.log(this.CartArrayItems);
      }
    } else {
      const InCartItem = this.CartArrayItems.find(item => item.id === itemId);
      if (InCartItem && item) {
        InCartItem.InCartQuantity += this.ItemCounter;
        item.AvailableQuantity -= this.ItemCounter;
      }
    }
    this.ItemCounter = 0;
  }
}

export const supermarketItemsStore = new SuperMarketArray();
