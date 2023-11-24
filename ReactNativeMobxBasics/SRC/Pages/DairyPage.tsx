import React from 'react';
import {View} from 'react-native';
import {ItemModal} from '../components/Modals/ItemModal';
import {SuperMarketItemsMap} from '../Data/Functions/ComposableFunctions/SuperMarketArrayMap';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
import {ItemCategory} from '../Data/Types/Enums/ItemCategory';

export const DairyPage = () => {
  return (
    <View>
      <View>
        <SuperMarketItemsMap
          Category={ItemCategory.Dairy}
          ItemsArray={supermarketItemsStore.SuperMarketArrayItems}
        />
      </View>
      <ItemModal />
    </View>
  );
};
