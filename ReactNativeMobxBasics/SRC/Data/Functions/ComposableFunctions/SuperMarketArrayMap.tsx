/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React from 'react';
import {MarketItemDisplay} from '../../../components/Prefabs/MarketItemDisplay';
import {MarketArrayItemMaInterface} from '../../Types/interfaces/MarketArrayMapInterface';
import {SuperMarketItem} from '../../Types/interfaces/SuperMarketItem';

export const SuperMarketItemsMap: React.FC<MarketArrayItemMaInterface> = ({
  Category,
  ItemsArray,
}) => {
  const myarray: SuperMarketItem[] = ItemsArray.filter(
    item => item.Category === Category,
  );
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      {myarray.map(MItem => (
        <MarketItemDisplay key={MItem.id} MarketItem={MItem} />
      ))}
    </ScrollView>
  );
};
