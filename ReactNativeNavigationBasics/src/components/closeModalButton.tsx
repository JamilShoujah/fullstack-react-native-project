/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {getModalStore} from '../store/modalStore';

export const CloseButton = () => {
  const modalStore = getModalStore();
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 10, right: 10}}
      onPress={() => {
        modalStore.closeModal();
      }}>
      <EntypoIcon name="cross" size={40} color="orangered" />
    </TouchableOpacity>
  );
};
