import {Alert} from 'react-native';
import {getSignUpStore} from '../store/signUpStore';
import {isValidEmail} from './EmailRegx';

export function signUpValidation(navigation: any) {
  const SignUpStore = getSignUpStore();
  const email = SignUpStore.emailValue.get();
  const password = SignUpStore.passwordValue.get();
  const isSame = SignUpStore.passwordsAreSame.get();

  if (isValidEmail(email)) {
    if (password !== '') {
      if (isSame) {
        navigation.navigate('Details');
      } else {
        Alert.alert('Error', 'Passwords do not match', [{text: 'OK'}]);
      }
    } else {
      Alert.alert('Error', 'Password should not be empty', [{text: 'OK'}]);
    }
  } else {
    Alert.alert('Error', 'Invalid email address', [{text: 'OK'}]);
  }
}
