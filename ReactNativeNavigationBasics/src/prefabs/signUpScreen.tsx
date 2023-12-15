import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import { PasswordInputField } from '../components/passwordInputComponent';
import {TextInputField} from '../components/textInputComponent';
import { IPageInterface } from '../ComponentInterfaces/PagesInterface';
import {getSignUpStore} from '../store/signUpStore';
import { signUpValidation } from '../functions/SignUpValidation';


export const SignUpScreen: React.FC<IPageInterface> = observer(({navigation}) => {
  const SignUpStore = getSignUpStore();

  const email = SignUpStore.emailValue.get();
  const password = SignUpStore.passwordValue.get();
  const verify = SignUpStore.verifyPasswordValue.get();

  return (
    <View style={{width: '70%', alignItems: 'center', margin: 10}}>
      <TextInputField
        placeholder="email Address"
        value={email}
        onValueChange={text => {
          SignUpStore.setEmailValue(text);
        }}
      />
      <PasswordInputField
        placeholder="password"
        value={password}
        onValueChange={text => {
          SignUpStore.setPasswordValue(text);;
        }}
      />
      <PasswordInputField
        placeholder="verify password"
        value={verify}
        onValueChange={text => {
          SignUpStore.setVerifyPasswordValue(text);;
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
      onPress={()=>{
        navigation.goBack();
      }}>
        <Text style={{color: 'blue'}}>already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
});
