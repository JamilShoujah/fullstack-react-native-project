/* eslint-disable @typescript-eslint/no-shadow */
import {Alert} from 'react-native';
import {getUserArrayStore} from '../store/user-array-store';

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
      Alert.alert('Warning!', 'Incorrect Password', [{text: 'OK'}]);
    }
  } else {
    Alert.alert('Warning!', 'Account doesnt exist', [{text: 'OK'}]);
  }
}
