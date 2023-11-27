/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import {MarketItemDisplay} from '../../../components/Prefabs/MarketItemDisplay';
import {MarketArrayItemMaInterface} from '../../Types/interfaces/MarketArrayMapInterface';
import {SuperMarketItem} from '../../Types/interfaces/SuperMarketItem';
import {ItemModal} from '../../../components/Modals/ItemModal';

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
        <View key={MItem.id} style={{width: '50%'}}>
          <MarketItemDisplay MarketItem={MItem} />
          <ItemModal />
        </View>
      ))}
    </ScrollView>
  );
};
