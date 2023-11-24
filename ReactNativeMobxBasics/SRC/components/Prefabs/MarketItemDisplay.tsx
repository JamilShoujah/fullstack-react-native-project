/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {MarketItemDisplayInterface} from '../../Data/Types/interfaces/MarketItemDisplayInterface';

export const MarketItemDisplay: React.FC<MarketItemDisplayInterface> = ({
  MarketItem,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // remove when done
        // MarketItem.AvailableQuantity -= 1;
        // console.log(MarketItem.AvailableQuantity);
      }}
      style={{
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        width: '47%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: MarketItem.Icon}}
        style={{width: 100, height: 100, borderRadius: 10, borderWidth: 2}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            flexWrap: 'wrap',
            marginRight: 10,
          }}>
          {MarketItem.Name}
        </Text>
        <Text style={{color: 'red', fontSize: 20, fontWeight: '900'}}>
          ${MarketItem.Price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
