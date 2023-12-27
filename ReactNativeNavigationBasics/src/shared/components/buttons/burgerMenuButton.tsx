/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export const MenuButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{position: 'absolute', left: '3%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name={'menu'} size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
