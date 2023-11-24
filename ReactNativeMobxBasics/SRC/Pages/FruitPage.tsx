import React from 'react';
import {View} from 'react-native';
import {SuperMarketItems} from '../Data/Arrays/SuperMarketItems';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const FruitPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Fruit}
        ItemsArray={SuperMarketItems}
      />
    </View>
  );
};
