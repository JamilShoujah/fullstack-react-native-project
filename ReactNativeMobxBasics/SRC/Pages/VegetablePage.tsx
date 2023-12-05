import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const VegetablePage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Vegetable}
        ItemsArray={supermarketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
