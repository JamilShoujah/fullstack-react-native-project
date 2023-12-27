/* eslint-disable @typescript-eslint/no-shadow */
import {Alert} from 'react-native';
import {getUserArrayStore} from '../data/stores/user-array-store';
import i18n from '../shared/i18n/i18n';

export function loginValidation(
  email: string,
  password: string,
  navigation: any,
) {
  const userArrayStore = getUserArrayStore();

  const user = userArrayStore.userArray.find(user => user.email === email);

  if (user) {
    if (password === user.password) {
      userArrayStore.setUserObject(user);
      navigation.navigate('Home');
    } else {
      Alert.alert(i18n.get('WARNING'), i18n.get('INCORRECT_PASSWORD'), [
        {text: i18n.get('OK')},
      ]);
    }
  } else {
    Alert.alert(i18n.get('WARNING'), i18n.get('NO_ACCOUNT_FOUND'), [
      {text: i18n.get('OK')},
    ]);
  }
}
