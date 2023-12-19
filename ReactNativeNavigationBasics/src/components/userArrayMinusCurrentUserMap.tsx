/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IUserInterface} from '../Interfaces/userInterface';
import {getModalStore} from '../store/modalStore';
import {getUserArrayStore} from '../store/userArrayStore';

export const UserArrayMinusCurrentUserMap = () => {
  const modalStore = getModalStore();
  const userArrayStore = getUserArrayStore();
  const usersArrayMinusCurrentUser =
    userArrayStore.userArrayMinusCurrentUser.get();
  return (
    <View>
      {usersArrayMinusCurrentUser.map((item: IUserInterface) => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => {
              modalStore.openModal();
              modalStore.setUserObject(item);
            }}
            style={{
              backgroundColor: 'lightsteelblue',
              padding: 10,
              borderRadius: 5,
              marginVertical: 2,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {item.firstName + ' ' + item.lastName}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
