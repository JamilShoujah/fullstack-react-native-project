import {ItemCategory} from '../Enums/ItemCategory';
import {ISuperMarketItem} from './SuperMarketItem';

export interface IMarketArrayItemMaInterface {
  Category: ItemCategory;
  ItemsArray: ISuperMarketItem[];
}
