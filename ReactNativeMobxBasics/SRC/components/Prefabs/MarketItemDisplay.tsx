/* eslint-disable react-native/no-inline-styles */
import {Observer} from 'mobx-react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalVisibileStore';
// import {supermarketItemsStore} from '../../Data/Store/SuperMarketArrayStore';
import {MarketItemDisplayInterface} from '../../Data/Types/interfaces/MarketItemDisplayInterface';

export const MarketItemDisplay: React.FC<MarketItemDisplayInterface> = ({
  MarketItem,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // supermarketItemsStore.UpdateQuantity(MarketItem.id);
        ModalVisible.OpenModal();
        console.log(ModalVisible.isOpen);
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
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          borderWidth: 2,
          margin: 10,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Observer>
          {() => (
            <Text
              style={{
                color: 'black',
                flexWrap: 'wrap',
                marginRight: 10,
              }}>
              {MarketItem.Name}
            </Text>
          )}
        </Observer>
        <Text style={{color: 'red', fontWeight: '900'}}>
          ${MarketItem.Price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
