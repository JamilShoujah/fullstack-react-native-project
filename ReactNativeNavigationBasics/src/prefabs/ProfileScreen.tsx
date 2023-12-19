/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {DataDisplay} from '../components/dataDisplay';
import {getUserArrayStore} from '../store/userArrayStore';
import Ion from 'react-native-vector-icons/Ionicons';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {LogOutButton} from '../components/logOutButton';

export const ProfileScreen: React.FC<IPageInterface> = ({navigation}) => {
  const userArrayStore = getUserArrayStore();
  const userObject = userArrayStore.userObject.get();
  const firstName = userObject.firstName;
  const lastName = userObject.lastName;
  const email = userObject.email;
  const age = userObject.age;
  const gender = userObject.gender;
  const religion = userObject.religion;
  const fullName = firstName + ' ' + lastName;
  return (
    <View>
      <View
        style={{
          backgroundColor: 'blue',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '900',
            padding: 20,
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          My Profile
        </Text>
        <LogOutButton navigation={navigation} />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 30,
        }}>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Ion name={'person-circle-outline'} size={200} />
        </View>

        <DataDisplay title={'Full name'} value={fullName} />
        <DataDisplay title={'Email'} value={email} />
        <DataDisplay title={'Age'} value={age} />
        <DataDisplay title={'Gender'} value={gender} />
        <DataDisplay title={'Religion'} value={religion} />
      </View>
    </View>
  );
};
