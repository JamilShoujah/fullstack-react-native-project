/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PasswordInputField} from '../../../shared/components/inputFields/passwordInputComponent';
import {TextInputField} from '../../../shared/components/inputFields/textInputComponent';
import {getSignUpStore} from '../../../data/stores/sign-up-store';
import {signUpValidation} from '../../../utils/SignUpValidation';
import i18n from '../../../shared/i18n/i18n';
import {useNavigation} from '@react-navigation/native';

export const SignUpScreen = observer(() => {
  const signUpStore = getSignUpStore();
  const email = signUpStore.emailValue.get();
  const password = signUpStore.passwordValue.get();
  const verify = signUpStore.verifyPasswordValue.get();
  const navigation = useNavigation();

  return (
    <View style={{width: '70%', alignItems: 'center', margin: 10}}>
      <TextInputField
        placeholder={i18n.get('EMAIL')}
        value={email}
        onValueChange={(text: string) => {
          signUpStore.setEmailValue(text);
        }}
      />
      <PasswordInputField
        placeholder={i18n.get('PASSWORD')}
        value={password}
        onValueChange={(text: string) => {
          signUpStore.setPasswordValue(text);
        }}
      />
      <PasswordInputField
        placeholder={i18n.get('VERIFY_PASSWORD')}
        value={verify}
        onValueChange={(text: string) => {
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
        <Text style={{color: 'white'}}>{i18n.get('SUBMIT')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{color: 'blue'}}>{i18n.get('HAVE_ACCOUNT')}</Text>
      </TouchableOpacity>
    </View>
  );
});
