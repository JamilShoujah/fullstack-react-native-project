import {Alert} from 'react-native';
import {getSignUpStore} from '../store/sign-up-store';
import {isValidEmail} from './EmailRegx';
import {getUserArrayStore} from '../store/user-array-store';
export function signUpValidation(navigation: any) {
  const signUpStore = getSignUpStore();
  const userArrayStore = getUserArrayStore();
  const email = signUpStore.emailValue.get();
  const password = signUpStore.passwordValue.get();
  const isSame = signUpStore.passwordsAreSame.get();
  const array = userArrayStore.userArray;

  let errors = [];

  if (!isValidEmail(email)) {
    errors.push('Valid Email');
  }

  if (array.find(user => user.email === email)) {
    errors.push('Email already in use');
  }

  if (!password) {
    errors.push('Password');
  }

  if (!isSame) {
    errors.push("Passwords don't match");
  }

  if (errors.length > 0) {
    Alert.alert('Warning', errors.join(', '), [{text: 'OK'}]);
    return;
  } else {
    navigation.navigate('Details');
  }
}
