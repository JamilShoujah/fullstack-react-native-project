/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  MODAL_STORE,
  MARKET_ITEMS_STORE,
} from '../../Data/Constants/VariableConstants';
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
            MARKET_ITEMS_STORE.removeItemfromCart(MODAL_STORE.getMarketItem.id);
          }}
          style={{backgroundColor: 'white', borderRadius: 10, padding: 5}}>
          <EntypoIcon name="minus" size={40} color="orangered" />
        </TouchableOpacity>

        <View style={{backgroundColor: 'white', borderRadius: 10, margin: 10}}>
          <Text style={{fontSize: 35, padding: 10}}>
            {MARKET_ITEMS_STORE.getItemCounter}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            MARKET_ITEMS_STORE.addItemToCart(MODAL_STORE.getMarketItem.id);
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
            MARKET_ITEMS_STORE.addtoCart(MODAL_STORE.getMarketItem.id);
            MODAL_STORE.closeModal();
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
