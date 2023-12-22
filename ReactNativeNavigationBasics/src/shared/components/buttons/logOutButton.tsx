/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {EGender} from '../../../data/types/enums/genderEnum';
import {EReligion} from '../../../data/types/enums/religionEnum';
import {IUserInterface} from '../../../data/types/Interfaces/userInterface';
import {getLogInStore} from '../../../data/stores/login-store';
import {getUserArrayStore} from '../../../data/stores/user-array-store';

export const LogOutButton: React.FC<IPageInterface> = ({navigation}) => {
  const loginStore = getLogInStore();
  const userArrayStore = getUserArrayStore();
  const emptyUserObject: IUserInterface = {
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: EGender.NO,
    religion: EReligion.NO,
  };
  return (
    <View style={{position: 'absolute', left: '87%'}}>
      <TouchableOpacity
        onPress={() => {
          loginStore.setEmailValue('');
          loginStore.setPasswordValue('');
          userArrayStore.setUserObject(emptyUserObject);

          navigation.navigate('LogIn');
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name={'log-out'} size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
