/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalVisibileStore';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const CloseButton = () => {
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 10, right: 10}}
      onPress={() => {
        ModalVisible.CloseModal();
      }}>
      <EntypoIcon name="cross" size={40} color="orangered" />
    </TouchableOpacity>
  );
};
