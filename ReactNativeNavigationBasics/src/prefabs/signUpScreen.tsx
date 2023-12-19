/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PasswordInputField} from '../components/passwordInputComponent';
import {TextInputField} from '../components/textInputComponent';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {getSignUpStore} from '../store/signUpStore';
import {signUpValidation} from '../functions/SignUpValidation';

export const SignUpScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const signUpStore = getSignUpStore();
    const email = signUpStore.emailValue.get();
    const password = signUpStore.passwordValue.get();
    const verify = signUpStore.verifyPasswordValue.get();
    return (
      <View style={{width: '70%', alignItems: 'center', margin: 10}}>
        <TextInputField
          placeholder="email Address"
          value={email}
          onValueChange={text => {
            signUpStore.setEmailValue(text);
          }}
        />
        <PasswordInputField
          placeholder="password"
          value={password}
          onValueChange={text => {
            signUpStore.setPasswordValue(text);
          }}
        />
        <PasswordInputField
          placeholder="verify password"
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
          <Text style={{color: 'white'}}>Proceed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: 'blue'}}>already have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
