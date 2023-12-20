/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PasswordInputField} from '../components/passwordInputComponent';
import {TextInputField} from '../components/textInputComponent';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {getSignUpStore} from '../store/sign-up-store';
import {signUpValidation} from '../utils/SignUpValidation';
import {useTranslation} from 'react-i18next';

export const SignUpScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const signUpStore = getSignUpStore();
    const email = signUpStore.emailValue.get();
    const password = signUpStore.passwordValue.get();
    const verify = signUpStore.verifyPasswordValue.get();
    const {t} = useTranslation();
    const email_ = t('emailAddress');
    const password_ = t('password');
    const verifyPassword_ = t('verifyPassword');
    const proceed_ = t('proceed');
    const haveAccount_ = t('haveAccount');

    return (
      <View style={{width: '70%', alignItems: 'center', margin: 10}}>
        <TextInputField
          placeholder={email_}
          value={email}
          onValueChange={text => {
            signUpStore.setEmailValue(text);
          }}
        />
        <PasswordInputField
          placeholder={password_}
          value={password}
          onValueChange={text => {
            signUpStore.setPasswordValue(text);
          }}
        />
        <PasswordInputField
          placeholder={verifyPassword_}
          value={verify}
          onValueChange={text => {
            signUpStore.setVerifyPasswordValue(text);
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
            signUpValidation(navigation);
          }}>
          <Text style={{color: 'white'}}>{proceed_}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: 'blue'}}>{haveAccount_}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
