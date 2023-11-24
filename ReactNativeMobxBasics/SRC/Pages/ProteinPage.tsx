import React from 'react';
import {View} from 'react-native';
import {SuperMarketItems} from '../Data/Arrays/SuperMarketItems';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const ProteinPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Protein}
        ItemsArray={SuperMarketItems}
      />
    </View>
  );
};
