import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {getSuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const VegetablePage = () => {
  const marketItemsStore = getSuperMarketItemsStore();

  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.vegetable}
        ItemsArray={marketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
