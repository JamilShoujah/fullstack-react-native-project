/* eslint-disable @typescript-eslint/no-shadow */
import memoize from 'lodash/memoize';
import {observable, runInAction} from 'mobx';
import {SUPER_MARKET_ITEMS} from '../Constants/SuperMarketItems';
import {ICostArrayObject} from '../Types/interfaces/CostArrayObject';
import {ISuperMarketItem} from '../Types/interfaces/SuperMarketItem';

class SuperMarketArray {
  superMarketArrayItems =
    observable.array<ISuperMarketItem>(SUPER_MARKET_ITEMS);
  cartArrayItems = observable.array<ISuperMarketItem>([]);
  costArray = observable.array<ICostArrayObject>([]);
  itemCounter = observable.box(0);
  count = observable.box(0);
  defaultValue = observable.box(0);
  total = observable.box(0);
  money = observable.box(1000);

  setSuperMarketArrayItems(newItems: ISuperMarketItem[]) {
    runInAction(() => {
      this.superMarketArrayItems.replace(newItems);
    });
  }
  setCartArrayItems(newItems: ISuperMarketItem) {
    runInAction(() => {
      this.cartArrayItems.push(newItems);
    });
  }

  setCostArray(costObj: ICostArrayObject) {
    runInAction(() => {
      this.costArray.push(costObj);
    });
  }

  clearCostArray() {
    runInAction(() => {
      this.costArray.clear;
    });
  }
  clearCartArrayItems() {
    runInAction(() => {
      this.cartArrayItems.clear();
    });
  }

  setItemCounter(newCount: number) {
    runInAction(() => {
      this.itemCounter.set(newCount);
    });
  }

  setCount(newCount: number) {
    runInAction(() => {
      this.count.set(newCount);
    });
  }

  setDefaultValue(newValue: number) {
    runInAction(() => {
      this.defaultValue.set(newValue);
    });
  }

  setTotal(newTotal: number) {
    runInAction(() => {
      this.total.set(newTotal);
    });
  }

  setMoney(newMoney: number) {
    runInAction(() => {
      this.money.set(newMoney);
    });
  }

  addItemToCart(itemId: number) {
    const item = this.superMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.AvailableQuantity > 0) {
        this.setItemCounter(this.itemCounter.get() + 1);
      } else {
        console.log('No more items');
      }
    }
  }

  removeItemfromCart(itemId: number) {
    const item = this.superMarketArrayItems.find(item => item.id === itemId);
    if (item) {
      if (item.InCartQuantity > 0) {
        this.setItemCounter(this.itemCounter.get() - 1);
        this.setCount(this.count.get() + 1);
      } else {
        console.log('No items in cart');
      }
    }
  }

  cancelPurchase(itemId: number) {
    const item = this.superMarketArrayItems.find(item => item.id === itemId);
    const InCartItem = this.cartArrayItems.find(item => item.id === itemId);
    if (item) {
      this.setItemCounter(0);
      if (InCartItem) {
        item.InCartQuantity = InCartItem.InCartQuantity;
      }
    }
  }

  addtoCart(itemId: number) {
    const item = this.superMarketArrayItems.find(item => item.id === itemId);
    const InCartItem = this.cartArrayItems.find(item => item.id === itemId);
    if (!item) {
      return;
    } else {
      runInAction(() => {
        if (this.cartArrayItems.length === 0) {
          const newItem = item;
          newItem.InCartQuantity = this.itemCounter.get();
          this.setCartArrayItems(newItem);
          item.AvailableQuantity -= this.itemCounter.get();
        } else {
          if (InCartItem) {
            InCartItem.InCartQuantity += this.itemCounter.get();
            item.AvailableQuantity -= this.itemCounter.get();
          }
          if (!InCartItem) {
            const newItem = item;
            newItem.InCartQuantity = this.itemCounter.get();
            this.setCartArrayItems(newItem);
            item.AvailableQuantity -= this.itemCounter.get();
          }
        }
        this.setItemCounter(0);
      });
    }
  }

  get totalCost() {
    const totalval = this.costArray.reduce(
      (accumulator, currentObject) => accumulator + currentObject.price,
      0,
    );
    this.setTotal(totalval);
    return totalval;
  }

  updateCostArray(costObj: ICostArrayObject) {
    const CheckId = this.costArray.find(item => item.id === costObj.id);
    if (CheckId) {
      CheckId.price = costObj.price;
    } else {
      this.setCostArray(costObj);
    }
  }

  confirmPurchase(cost: number) {
    if (cost < this.money.get()) {
      console.log('purchase successful');
      this.setMoney(this.money.get() - cost);
      this.clearCartArrayItems();
      this.clearCostArray();
    } else {
      console.log('Insufficient Funds');
    }
  }
}

export const getSuperMarketItemsStore = memoize(
  () => {
    return new SuperMarketArray();
  },
  () => 1,
);
