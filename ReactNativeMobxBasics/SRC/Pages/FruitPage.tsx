import React from 'react';
import {View} from 'react-native';
import {MARKET_ITEMS_STORE} from '../Data/Constants/VariableConstants';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const FruitPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Fruit}
        ItemsArray={MARKET_ITEMS_STORE.superMarketArrayItems}
      />
    </View>
  );
};
