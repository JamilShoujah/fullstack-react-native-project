import {Alert} from 'react-native';
import {getSignUpStore} from '../store/signUpStore';
import {isValidEmail} from './EmailRegx';

export function signUpValidation(navigation: any) {
  const SignUpStore = getSignUpStore();
  const email = SignUpStore.emailValue.get();
  const password = SignUpStore.passwordValue.get();
  const isSame = SignUpStore.passwordsAreSame.get();

  let errors = [];

  if (!isValidEmail(email)) {
      errors.push('Valid Email');
  }
  if (!password) {
      errors.push('Password');
  }
  
  if (errors.length > 0) {
      Alert.alert('Data Missing', errors.join(', '), [{text: 'OK'}]);
      return;
  }

  if (isSame) {
    navigation.navigate('Details');
  }else{
      Alert.alert('Warning', "Password didn't match", [{text: 'OK'}]);
      return;
  }
}
