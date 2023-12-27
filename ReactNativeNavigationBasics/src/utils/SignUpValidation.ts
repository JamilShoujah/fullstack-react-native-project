import {Alert} from 'react-native';
import {getSignUpStore} from '../data/stores/sign-up-store';
import {isValidEmail} from './EmailRegx';
import {getUserArrayStore} from '../data/stores/user-array-store';
import i18n from '../shared/i18n/i18n';
export function signUpValidation(navigation: any) {
  const signUpStore = getSignUpStore();
  const userArrayStore = getUserArrayStore();
  const email = signUpStore.emailValue.get();
  const password = signUpStore.passwordValue.get();
  const isSame = signUpStore.passwordsAreSame.get();
  const array = userArrayStore.userArray;

  let errors = [];

  if (!isValidEmail(email)) {
    errors.push(i18n.get('INVALID_EMAIL'));
  }

  if (array.find(user => user.email === email)) {
    errors.push(i18n.get('EMAIL_IN_USE'));
  }

  if (!password) {
    errors.push(i18n.get('INCORRECT_PASSWORD'));
  }

  if (!isSame) {
    errors.push(i18n.get('PASSWORDS_DONT_MATCH'));
  }

  if (errors.length > 0) {
    Alert.alert(i18n.get('WARNING'), errors.join(', '), [
      {text: i18n.get('OK')},
    ]);
    return;
  } else {
    navigation.navigate('Details');
  }
}
