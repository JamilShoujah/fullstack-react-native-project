import {Alert} from 'react-native';
import {getSignUpStore} from '../store/signUpStore';
import {isValidEmail} from './EmailRegx';
import {getUserArrayStore} from '../store/userArrayStore';
export function signUpValidation(navigation: any) {
  const SignUpStore = getSignUpStore();
  const UserArrayStore = getUserArrayStore();
  const email = SignUpStore.emailValue.get();
  const password = SignUpStore.passwordValue.get();
  const isSame = SignUpStore.passwordsAreSame.get();
  const array = UserArrayStore.userArray;

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
