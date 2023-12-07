/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  MODAL_STORE,
  MARKET_ITEMS_STORE,
} from '../../Data/Constants/VariableConstants';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const CloseButton = () => {
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 10, right: 10}}
      onPress={() => {
        MODAL_STORE.closeModal();
        MARKET_ITEMS_STORE.cancelPurchase(MODAL_STORE.marketItem.get().id);
      }}>
      <EntypoIcon name="cross" size={40} color="orangered" />
    </TouchableOpacity>
  );
};
