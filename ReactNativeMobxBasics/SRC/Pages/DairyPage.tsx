import React from 'react';
import {View} from 'react-native';
import {SuperMarketItems} from '../Data/Arrays/SuperMarketItems';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const DairyPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Dairy}
        ItemsArray={SuperMarketItems}
      />
    </View>
  );
};
