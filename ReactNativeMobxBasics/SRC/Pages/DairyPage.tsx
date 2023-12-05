import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const DairyPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Dairy}
        ItemsArray={supermarketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
