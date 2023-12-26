/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PasswordInputField} from '../../../shared/components/inputFields/passwordInputComponent';
import {TextInputField} from '../../../shared/components/inputFields/textInputComponent';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {getLogInStore} from '../../../data/stores/login-store';
import {loginValidation} from '../../../utils/loginValidation';
import i18n from '../../../shared/i18n/i18n';

export const LogInScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const logInStore = getLogInStore();
    const email = logInStore.emailValue.get();
    const password = logInStore.passwordValue.get();

    return (
      <View style={{width: '70%', alignItems: 'center', margin: 10}}>
        <TextInputField
          placeholder={i18n.get('EMAIL')}
          value={email}
          onValueChange={(text: string) => {
            logInStore.setEmailValue(text);
          }}
        />
        <PasswordInputField
          placeholder={i18n.get('PASSWORD')}
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
          <Text style={{color: 'white'}}>{i18n.get('SUBMIT')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: 'blue'}}>{i18n.get('NO_ACCOUNT')}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
