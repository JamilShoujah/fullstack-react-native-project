/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {EGender} from '../enums/genderEnum';
import {EReligion} from '../enums/religionEnum';
import {IUserInterface} from '../Interfaces/userInterface';
import {getLogInStore} from '../store/loginStore';
import {getUserArrayStore} from '../store/userArrayStore';
export const LogOutButton: React.FC<IPageInterface> = ({navigation}) => {
  const loginStore = getLogInStore();
  const UserArrayStore = getUserArrayStore();
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
          UserArrayStore.setUserObject(emptyUserObject);

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
