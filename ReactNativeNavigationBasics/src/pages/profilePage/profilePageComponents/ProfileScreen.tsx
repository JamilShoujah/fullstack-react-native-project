/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {DataDisplay} from '../../../shared/components/custom/dataDisplay';
import {getUserArrayStore} from '../../../data/stores/user-array-store';
import Ion from 'react-native-vector-icons/Ionicons';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {LogOutButton} from '../../../shared/components/buttons/logOutButton';
import {MenuButton} from '../../../shared/components/buttons/burgerMenuButton';
import {useTranslation} from 'react-i18next';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';

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

  const {t} = useTranslation();
  const profile = t('profile');
  const fullName_ = t('fullname');
  const email_ = t('email');
  const age_ = t('age');
  const gender_ = t('gender');
  const religion_ = t('religion');
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();

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
          {profile}
        </Text>
        <MenuButton navigation={navigation} />
        <LogOutButton navigation={navigation} />
      </View>
      <View
        style={{
          alignItems: isR2L ? 'flex-end' : 'flex-start',
          justifyContent: 'center',
          padding: 30,
        }}>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Ion name={'person-circle-outline'} size={200} />
        </View>

        <DataDisplay title={fullName_} value={fullName} />
        <DataDisplay title={email_} value={email} />
        <DataDisplay title={age_} value={age} />
        <DataDisplay title={gender_} value={gender} />
        <DataDisplay title={religion_} value={religion} />
      </View>
    </View>
  );
};
