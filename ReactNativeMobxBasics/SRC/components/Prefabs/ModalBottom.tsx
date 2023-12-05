/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalStore';
import {supermarketItemsStore} from '../../Data/Store/SuperMarketArrayStore';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {observer} from 'mobx-react';

export const ModalBottom = observer(() => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          backgroundColor: 'gainsboro',
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            supermarketItemsStore.RemoveItemfromCart(
              ModalVisible.MarketItem.id,
            );
          }}
          style={{backgroundColor: 'white', borderRadius: 10, padding: 5}}>
          <EntypoIcon name="minus" size={40} color="orangered" />
        </TouchableOpacity>

        <View style={{backgroundColor: 'white', borderRadius: 10, margin: 10}}>
          <Text style={{fontSize: 35, padding: 10}}>
            {supermarketItemsStore.ItemCounter}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            supermarketItemsStore.AddItemToCart(ModalVisible.MarketItem.id);
          }}
          style={{backgroundColor: 'white', borderRadius: 10, padding: 5}}>
          <EntypoIcon name="plus" size={40} color="green" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            supermarketItemsStore.AddtoCart(ModalVisible.MarketItem.id);
            ModalVisible.CloseModal();
          }}
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Update Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
