/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {IMarketArrayItemMaInterface} from '../../Types/interfaces/MarketArrayMapInterface';
import {ISuperMarketItem} from '../../Types/interfaces/SuperMarketItem';
import {marketArrayMap} from '../Standard Functions/MarketArrayMap';

export const SuperMarketItemsMap: React.FC<IMarketArrayItemMaInterface> = ({
  Category,
  ItemsArray,
}) => {
  const myarray: ISuperMarketItem[] = ItemsArray.filter(
    item => item.Category === Category,
  );
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      {marketArrayMap(myarray)}
    </ScrollView>
  );
};
