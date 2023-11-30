/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TableTopBar} from '../Data/Functions/ComposableFunctions/HomePageTableBar';
import {MyCartItemMapFunctions} from '../Data/Functions/ComposableFunctions/MyCartItemsMapFunction';
import {supermarketItemsStore} from '../Data/Store/SuperMarketArrayStore';
export const HomePage = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <TableTopBar />
      <MyCartItemMapFunctions
        ItemsArray={supermarketItemsStore.CartArrayItems}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(supermarketItemsStore.TotalCost);
        }}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};
