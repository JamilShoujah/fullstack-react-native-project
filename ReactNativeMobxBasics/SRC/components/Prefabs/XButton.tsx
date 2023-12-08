/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {getModalStore} from '../../Data/Store/ModalStore';
import {getSuperMarketItemsStore} from '../../Data/Store/SuperMarketArrayStore';

export const CloseButton = () => {
  const modalStore = getModalStore();
  const marketItemsStore = getSuperMarketItemsStore();
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 10, right: 10}}
      onPress={() => {
        modalStore.closeModal();
        marketItemsStore.cancelPurchase(modalStore.marketItem.get().id);
      }}>
      <EntypoIcon name="cross" size={40} color="orangered" />
    </TouchableOpacity>
  );
};
