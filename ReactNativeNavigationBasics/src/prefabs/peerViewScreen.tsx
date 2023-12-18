/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UserArrayMinusCurrentUserMap} from '../functions/userArrayMinusCurrentUserMap';
import {ItemModal} from './userModal';

export const PeerViewScreen = () => {
  return (
    <View>
      <View style={{backgroundColor: 'blue', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '900',
            padding: 20,
            fontSize: 20,
          }}>
          Peer View
        </Text>
      </View>
      <ScrollView style={{padding: 10}}>
        <UserArrayMinusCurrentUserMap />
      </ScrollView>

      <ItemModal />
    </View>
  );
};
