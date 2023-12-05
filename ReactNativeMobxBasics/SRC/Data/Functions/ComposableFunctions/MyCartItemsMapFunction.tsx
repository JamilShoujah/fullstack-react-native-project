import React from 'react';
import {TableItemBody} from './HomePageTableBody';
import {ISuperMarketItem} from '../../Types/interfaces/SuperMarketItem';

export function MyCartItemMapFunctions(ItemsArray: ISuperMarketItem[]) {
  return ItemsArray.map((MItem: ISuperMarketItem) => (
    <TableItemBody key={MItem.id} MItem={MItem} />
  ));
}
