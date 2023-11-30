import {supermarketItemsStore} from '../../Store/SuperMarketArrayStore';
import {CostArrayObject} from '../../Types/interfaces/CostArrayObject';

export function UpdateCostArray(costObj: CostArrayObject) {
  const CheckId = supermarketItemsStore.costArray.find(
    item => item.id === costObj.id,
  );
  if (CheckId) {
    CheckId.price = costObj.price;
  } else {
    supermarketItemsStore.costArray.push(costObj);
  }
}
