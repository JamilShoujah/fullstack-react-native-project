import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {getUserArrayStore} from '../store/userArrayStore';

export const PeerViewPage = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
      }}>
      <Text style={{fontWeight: '900', color: 'white'}}>
        KING OF THE PIRATES
      </Text>
    </View>
  );
};
