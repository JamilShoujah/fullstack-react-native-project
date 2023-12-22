/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PasswordInputField} from '../../../shared/components/inputFields/passwordInputComponent';
import {TextInputField} from '../../../shared/components/inputFields/textInputComponent';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {getLogInStore} from '../../../data/stores/login-store';
import {loginValidation} from '../../../utils/loginValidation';
import {useTranslation} from 'react-i18next';

export const LogInScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const logInStore = getLogInStore();
    const email = logInStore.emailValue.get();
    const password = logInStore.passwordValue.get();
    const {t} = useTranslation();
    const email_ = t('emailAddress');
    const password_ = t('password');
    const proceed_ = t('proceed');
    const noAccount_ = t('noAccount');

    return (
      <View style={{width: '70%', alignItems: 'center', margin: 10}}>
        <TextInputField
          placeholder={email_}
          value={email}
          onValueChange={(text: string) => {
            logInStore.setEmailValue(text);
          }}
        />
        <PasswordInputField
          placeholder={password_}
          value={password}
          onValueChange={(text: string) => {
            logInStore.setPasswordValue(text);
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 5,
            width: '50%',
          }}
          onPress={() => {
            loginValidation(email, password, navigation);
          }}>
          <Text style={{color: 'white'}}>{proceed_}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: 'blue'}}>{noAccount_}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
