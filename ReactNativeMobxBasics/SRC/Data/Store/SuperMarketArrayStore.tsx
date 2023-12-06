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
  get getItemCounter() {
    return this.itemCounter.get();
  }
  get getCount() {
    return this.count.get();
  }
  get getDefaultValue() {
    return this.defaultValue.get();
  }
  get getTotal() {
    return this.total.get();
  }
  get getMoney() {
    return this.money.get();
  }

  addItemToCart(itemId: number) {
    runInAction(() => {
      const item = this.superMarketArrayItems.find(item => item.id === itemId);
      if (item) {
        if (item.AvailableQuantity > 0) {
          this.itemCounter.set(this.getItemCounter + 1);
        } else {
          console.log('No more items');
        }
      }
    });
  }

  removeItemfromCart(itemId: number) {
    runInAction(() => {
      const item = this.superMarketArrayItems.find(item => item.id === itemId);
      if (item) {
        if (item.InCartQuantity > 0) {
          this.itemCounter.set(this.getItemCounter - 1);
          this.count.set(this.getCount + 1);
        } else {
          console.log('No items in cart');
        }
      }
    });
  }

  cancelPurchase(itemId: number) {
    runInAction(() => {
      const item = this.superMarketArrayItems.find(item => item.id === itemId);
      const InCartItem = this.cartArrayItems.find(item => item.id === itemId);
      if (item) {
        this.itemCounter.set(0);
        if (InCartItem) {
          item.InCartQuantity = InCartItem.InCartQuantity;
        }
      }
    });
  }

  addtoCart(itemId: number) {
    runInAction(() => {
      const item = this.superMarketArrayItems.find(item => item.id === itemId);
      const InCartItem = this.cartArrayItems.find(item => item.id === itemId);
      if (this.cartArrayItems.length === 0) {
        if (item) {
          const newItem = item;
          newItem.InCartQuantity = this.getItemCounter;
          this.cartArrayItems.push(newItem);
          item.AvailableQuantity -= this.getItemCounter;
        }
      } else {
        if (item) {
          if (InCartItem) {
            InCartItem.InCartQuantity += this.getItemCounter;
            item.AvailableQuantity -= this.getItemCounter;
          }
          if (!InCartItem) {
            const newItem = item;
            newItem.InCartQuantity = this.getItemCounter;
            this.cartArrayItems.push(newItem);
            item.AvailableQuantity -= this.getItemCounter;
          }
        }
      }
      this.itemCounter.set(0);
    });
  }

  get totalCost() {
    const total = this.costArray.reduce(
      (accumulator, currentObject) => accumulator + currentObject.price,
      0,
    );
    return total;
  }

  setTotalCost() {
    runInAction(() => {
      this.total.set(this.totalCost);
    });
  }

  updateCostArray(costObj: ICostArrayObject) {
    runInAction(() => {
      const CheckId = this.costArray.find(item => item.id === costObj.id);
      if (CheckId) {
        CheckId.price = costObj.price;
      } else {
        this.costArray.push(costObj);
      }
    });
  }

  confirmPurchase(cost: number) {
    runInAction(() => {
      if (cost < this.getMoney) {
        console.log('purchase successful');
        this.money.set(this.getMoney - cost);
        this.cartArrayItems.clear();
        this.costArray.clear();
      } else {
        console.log('Insufficient Funds');
      }
    });
  }
}

export const getSuperMarketItemsStore = memoize(() => {
  return new SuperMarketArray();
});
