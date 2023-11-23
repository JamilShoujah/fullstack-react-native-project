/* eslint-disable react-native/no-inline-styles */
import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SuperMarketItems} from '../Arrays/SuperMarketItems';

export const SuperMarketItemsMap = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      {SuperMarketItems.map(MarketItem => (
        <View
          key={MarketItem.id}
          style={{
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 10,
            margin: 5,
            width: '47%',
          }}>
          <Text style={{color: 'white'}}>{MarketItem.Icon}</Text>
          <Text style={{color: 'white'}}>{MarketItem.Name}</Text>
          <Text style={{color: 'white'}}>{MarketItem.Price}</Text>
          <Text style={{color: 'white'}}>{MarketItem.id}</Text>
          <Text style={{color: 'white'}}>{MarketItem.Category}</Text>
          <Text style={{color: 'white'}}>{MarketItem.AvailableQuantity}</Text>
          <Text style={{color: 'white'}}>{MarketItem.InCartQuantity}</Text>
          <Text style={{color: 'white'}}>{MarketItem.DiscountPercentage}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
