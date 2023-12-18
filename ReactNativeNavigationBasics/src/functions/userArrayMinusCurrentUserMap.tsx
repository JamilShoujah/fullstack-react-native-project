import React from 'react';
import {View, Text} from 'react-native';
import {IUserInterface} from '../Interfaces/userInterface';
import {getUserArrayStore} from '../store/userArrayStore';

export const UserArrayMinusCurrentUserMap = () => {
  const UserArrayStore = getUserArrayStore();
  const usersArrayMinusCurrentUser =
    UserArrayStore.userArrayMinusCurrentUser.get();
  return (
    <View>
      {usersArrayMinusCurrentUser.map((item: IUserInterface) => (
        <View key={item.id}>
          <Text>{item.firstName}</Text>
        </View>
      ))}
    </View>
  );
};
