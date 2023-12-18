import {getSuperMarketItemsStore} from '../../Store/SuperMarketArrayStore';
import {ICostArrayObject} from '../../Types/interfaces/CostArrayObject';

export function totalPriceCalc(
  price: number,
  quantity: number,
  discount: number,
  id: number,
): number {
  const marketItemsStore = getSuperMarketItemsStore();
  let total: number = price * quantity;
  if (discount !== 0) {
    const discountAmmount: number = total * (discount / 100);
    total -= discountAmmount;
  }

  const costObject: ICostArrayObject = {
    price: total,
    id: id,
  };

  marketItemsStore.updateCostArray(costObject);
  return parseFloat(total.toFixed(2));
}
