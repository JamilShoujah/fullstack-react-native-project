/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {DataDisplay} from '../../../shared/components/custom/dataDisplay';
import {getUserArrayStore} from '../../../data/stores/user-array-store';
import Ion from 'react-native-vector-icons/Ionicons';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {LogOutButton} from '../../../shared/components/buttons/logOutButton';
import {MenuButton} from '../../../shared/components/buttons/burgerMenuButton';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';
import i18n from '../../../shared/i18n/i18n';
import {observer} from 'mobx-react';

export const ProfileScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const userArrayStore = getUserArrayStore();
    const userObject = userArrayStore.userObject.get();
    const {email, age, gender, religion, firstName, lastName} = userObject;
    const fullName = firstName + ' ' + lastName;

    const lang = getLanguageStore();
    const isR2L = lang.isRighttoLeft.get();

    return (
      <View>
        <View
          style={{
            backgroundColor: 'blue',
            flexDirection: isR2L ? 'row-reverse' : 'row',
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
            {i18n.get('PROFILE')}
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

          <DataDisplay title={i18n.get('FULL_NAME')} value={fullName} />
          <DataDisplay title={i18n.get('EMAIL')} value={email} />
          <DataDisplay title={i18n.get('AGE')} value={age} />
          <DataDisplay title={i18n.get('GENDER')} value={gender} />
          <DataDisplay title={i18n.get('RELIGION')} value={religion} />
        </View>
      </View>
    );
  },
);
