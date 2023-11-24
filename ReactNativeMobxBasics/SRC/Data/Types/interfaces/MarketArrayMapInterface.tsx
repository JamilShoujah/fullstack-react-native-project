import {ItemCategory} from '../Enums/ItemCategory';
import {SuperMarketItem} from './SuperMarketItem';

export interface MarketArrayItemMaInterface {
  Category: ItemCategory;
  ItemsArray: SuperMarketItem[];
}
