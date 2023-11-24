import {ItemCategory} from '../Enums/ItemCategory';

export interface SuperMarketItem {
  Icon: string;
  Name: string;
  Price: number;
  id: number;
  Category: ItemCategory;
  AvailableQuantity: number;
  InCartQuantity: number;
  DiscountPercentage: number;
}
