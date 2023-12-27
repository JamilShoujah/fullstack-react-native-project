import {Alert} from 'react-native';
import {IUserInterface} from '../data/types/Interfaces/userInterface';
import {getSignUpStore} from '../data/stores/sign-up-store';
import {getUserArrayStore} from '../data/stores/user-array-store';
import i18n from '../shared/i18n/i18n';

export function signUpDetailValidation(navigation: any) {
  const SignUpStore = getSignUpStore();
  const firstName = SignUpStore.firstName.get();
  const lastName = SignUpStore.lastName.get();
  const age = SignUpStore.age.get();
  const gender = SignUpStore.gender.get();
  const religion = SignUpStore.religion.get();
  const UserArrayStore = getUserArrayStore();

  let errors = [];

  if (!firstName) {
    errors.push(i18n.get('FIRST_NAME'));
  }
  if (!lastName) {
    errors.push(i18n.get('LAST_NAME'));
  }
  if (!age) {
    errors.push(i18n.get('AGE'));
  }
  if (!gender) {
    errors.push(i18n.get('GENDER'));
  }
  if (!religion) {
    errors.push(i18n.get('RELIGION'));
  }

  if (errors.length > 0) {
    Alert.alert(i18n.get('DATA_MISSING'), errors.join(', '), [
      {text: i18n.get('OK')},
    ]);
    return;
  }

  const user: IUserInterface = SignUpStore.createUserObject();
  UserArrayStore.setUserObject(user);
  UserArrayStore.addToUserArrray(user);
  navigation.navigate('Home');
}
