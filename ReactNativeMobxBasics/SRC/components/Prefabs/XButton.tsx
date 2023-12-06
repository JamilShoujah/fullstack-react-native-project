/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ModalStore} from '../../Data/Constants/VariableConstants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {SuperMarketItemsStore} from '../../Data/Store/SuperMarketArrayStore';

export const CloseButton = () => {
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 10, right: 10}}
      onPress={() => {
        ModalStore.closeModal();
        SuperMarketItemsStore.cancelPurchase(ModalStore.getMarketItem.id);
      }}>
      <EntypoIcon name="cross" size={40} color="orangered" />
    </TouchableOpacity>
  );
};
