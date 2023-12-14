import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { IPageInterface } from '../ComponentInterfaces/PagesInterface';
import { getUserArrayStore } from '../store/userArrayStore';

export const ProfilePage: React.FC<IPageInterface> = ({navigation}) => {
    const UserArrayStore = getUserArrayStore();
  return (
    <View
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
      }}>
      <Text style={{fontWeight: '900', color: 'white'}}>
        KING OF THE PIRATES
      </Text>
      <TouchableOpacity onPress={() => {
        console.log(UserArrayStore.userArray);
      }}
        style={{backgroundColor: 'white', padding: 10, margin: 10}}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
};
