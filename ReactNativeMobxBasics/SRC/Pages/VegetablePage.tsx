import React from 'react';
import {View} from 'react-native';
import {MARKET_ITEMS_STORE} from '../Data/Constants/VariableConstants';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const VegetablePage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.vegetable}
        ItemsArray={MARKET_ITEMS_STORE.superMarketArrayItems}
      />
    </View>
  );
};
