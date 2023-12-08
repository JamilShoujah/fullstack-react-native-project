import React from 'react';
import {View} from 'react-native';
import {MARKET_ITEMS_STORE} from '../Data/Constants/Constants';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const FruitPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.fruit}
        ItemsArray={MARKET_ITEMS_STORE.superMarketArrayItems}
      />
    </View>
  );
};
