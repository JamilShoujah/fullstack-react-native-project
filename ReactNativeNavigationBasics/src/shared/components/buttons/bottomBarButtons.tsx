/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity} from 'react-native';
import {IBottomBarButton} from '../../../data/types/ComponentInterfaces/BottomBarButtonInterface';

export const BottomBarButtons: React.FC<IBottomBarButton> = ({
  title,
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <Icon name={name} size={25} color={'white'} />
      <Text style={{color: 'white', fontSize: 10}}>{title}</Text>
    </TouchableOpacity>
  );
};
