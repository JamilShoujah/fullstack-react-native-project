import {MARKET_ITEMS_STORE} from '../../Constants/VariableConstants';
import {ICostArrayObject} from '../../Types/interfaces/CostArrayObject';

export function totalPriceCalc(
  price: number,
  quantity: number,
  discount: number,
  id: number,
): number {
  let total: number = price * quantity;
  if (discount !== 0) {
    const DISCOUNT_AMMOUNT: number = total * (discount / 100);
    total -= DISCOUNT_AMMOUNT;
  }

  const COST_OBJECT: ICostArrayObject = {
    price: total,
    id: id,
  };

  MARKET_ITEMS_STORE.updateCostArray(COST_OBJECT);
  return parseFloat(total.toFixed(2));
}
