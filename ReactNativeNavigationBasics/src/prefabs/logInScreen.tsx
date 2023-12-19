/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PasswordInputField} from '../components/passwordInputComponent';
import {TextInputField} from '../components/textInputComponent';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {getLogInStore} from '../store/login-store';
import {loginValidation} from '../functions/loginValidation';

export const LogInScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const logInStore = getLogInStore();
    const email = logInStore.emailValue.get();
    const password = logInStore.passwordValue.get();

    // const UserArrayStore = getUserArrayStore();
    return (
      <View style={{width: '70%', alignItems: 'center', margin: 10}}>
        <TextInputField
          placeholder="email Address"
          value={email}
          onValueChange={text => {
            logInStore.setEmailValue(text);
          }}
        />
        <PasswordInputField
          placeholder="password"
          value={password}
          onValueChange={text => {
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
          <Text style={{color: 'white'}}>Proceed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: 'blue'}}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
