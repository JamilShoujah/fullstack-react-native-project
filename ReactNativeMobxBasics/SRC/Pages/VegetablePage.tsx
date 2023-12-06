import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {SuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const VegetablePage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Vegetable}
        ItemsArray={SuperMarketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
