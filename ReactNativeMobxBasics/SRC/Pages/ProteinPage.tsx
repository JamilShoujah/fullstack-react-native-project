import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {getSuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const ProteinPage = () => {
  const marketItemsStore = getSuperMarketItemsStore();

  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.protein}
        ItemsArray={marketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
