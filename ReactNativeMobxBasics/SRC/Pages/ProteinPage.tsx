import React from 'react';
import {View} from 'react-native';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {SuperMarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const ProteinPage = () => {
  return (
    <View>
      <SuperMarketItemsMap
        Category={ItemCategory.Protein}
        ItemsArray={SuperMarketItemsStore.superMarketArrayItems}
      />
    </View>
  );
};
