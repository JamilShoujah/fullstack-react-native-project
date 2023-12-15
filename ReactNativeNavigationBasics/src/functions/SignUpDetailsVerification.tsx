import {Alert} from 'react-native';
import {getSignUpStore} from '../store/signUpStore';
import { getUserArrayStore } from '../store/userArrayStore';

export function signUpDetailValidation(navigation: any) {
  const SignUpStore = getSignUpStore();
  const firstName = SignUpStore.firstName.get();
  const lastName = SignUpStore.lastName.get();
  const age = SignUpStore.age.get();
  const gender = SignUpStore.gender.get();
  const religion = SignUpStore.religion.get();
  const UserArrayStore = getUserArrayStore();
  

  if (firstName !== '') {
    if (lastName !== '') {
      if (age !== "") {
        if(gender !== ""){
            if(religion !== ""){
                const user = SignUpStore.createUserObject();
                UserArrayStore.addToUserArrray(user);
                // console.log(UserArrayStore.userArray);
                navigation.navigate("Home")
            }else{
                Alert.alert('Error', 'Please select your religion', [{text: 'OK'}]);
            }
        }else{
            Alert.alert('Error', 'Please select your gender', [{text: 'OK'}]);
        }
      } else {
        Alert.alert('Error', 'Please enter age', [{text: 'OK'}]);
      }
    } else {
      Alert.alert('Error', 'Please enter last name', [{text: 'OK'}]);
    }
  } else {
    Alert.alert('Error', 'Please enter first name', [{text: 'OK'}]);
  }
}
