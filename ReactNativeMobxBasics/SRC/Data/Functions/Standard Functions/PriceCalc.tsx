import {SuperMarketItemsStore} from '../../Store/SuperMarketArrayStore';
import {ICostArrayObject} from '../../Types/interfaces/CostArrayObject';

export function totalPriceCalc(
  price: number,
  quantity: number,
  discount: number,
  id: number,
): number {
  let total: number = price * quantity;
  if (discount !== 0) {
    const discountAmount: number = total * (discount / 100);
    total -= discountAmount;
  }

  const costObject: ICostArrayObject = {
    price: total,
    id: id,
  };

  SuperMarketItemsStore.updateCostArray(costObject);
  return parseFloat(total.toFixed(2));
}
