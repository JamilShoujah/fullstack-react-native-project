import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {getUserArrayStore} from '../store/userArrayStore';

export const PeerViewPage = () => {
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text style={{color: 'white', fontWeight: '900', padding: 20}}>
        Peer View
      </Text>
    </View>
  );
};
