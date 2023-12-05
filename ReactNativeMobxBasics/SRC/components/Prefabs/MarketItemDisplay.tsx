/* eslint-disable react-native/no-inline-styles */
import {observer, Observer} from 'mobx-react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalStore';
import {IMarketItemDisplayInterface} from '../../Data/Types/interfaces/MarketItemDisplayInterface';

export const MarketItemDisplay: React.FC<IMarketItemDisplayInterface> =
  observer(({MarketItem}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // ModalVisible.OpenModal(MarketItem);
          ModalVisible.openModal(MarketItem);
        }}
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          margin: 5,
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
          <Text style={{color: 'orangered', fontWeight: '900'}}>
            ${MarketItem.Price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });
