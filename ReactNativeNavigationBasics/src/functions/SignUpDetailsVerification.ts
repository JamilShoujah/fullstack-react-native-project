import {Alert} from 'react-native';
import {IUserInterface} from '../Interfaces/userInterface';
import {getSignUpStore} from '../store/signUpStore';
import {getUserArrayStore} from '../store/userArrayStore';

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
    errors.push('First name');
  }
  if (!lastName) {
    errors.push('Last name');
  }
  if (!age) {
    errors.push('Age');
  }
  if (!gender) {
    errors.push('Gender');
  }
  if (!religion) {
    errors.push('Religion');
  }

  if (errors.length > 0) {
    Alert.alert('Data Missing', errors.join(', '), [{text: 'OK'}]);
    return;
  }

  const user: IUserInterface = SignUpStore.createUserObject();
  UserArrayStore.setUserObject(user);
  UserArrayStore.addToUserArrray(user);
  navigation.navigate('Home');
}
