import React from 'react';
import {View} from 'react-native';

import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {getSuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';

import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const DairyPage = () => {
  const marketItemsStore = getSuperMarketItemsStore();
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.dairy}
        ItemsArray={marketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
