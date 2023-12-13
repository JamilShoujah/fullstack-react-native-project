import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DropdownComponent from '../../components/dropDownComponent';
import {TextInputField} from '../../components/textInputComponent';
import { IPageInterface } from '../ComponentInterfaces/PagesInterface';
import {GENDER_ARRAY} from '../constants/GenderDropdownArray';
import {RELIGION_ARRAY} from '../constants/ReligionDropdownArray';
import {getSignUpStore} from '../store/signUpStore';

export const SignUpDetailsScreen: React.FC<IPageInterface> = observer(({navigation}) => {
  const SignUpStore = getSignUpStore();
  const firstName = SignUpStore.firstName.get();
  const lastName = SignUpStore.lastName.get();
  const age = SignUpStore.age.get();
  const gender = SignUpStore.gender.get();
  const religion = SignUpStore.religion.get();

  return (
    <View style={{flex: 1, width: '80%', padding: 10, alignItems: 'center'}}>
      <TextInputField
        placeholder={'first name'}
        value={firstName}
        onValueChange={text => SignUpStore.setFirstName(text)}
      />
      <TextInputField
        placeholder={'last name'}
        value={lastName}
        onValueChange={text => SignUpStore.setLastName(text)}
      />
      <TextInputField
        placeholder={'age'}
        value={age}
        onValueChange={text => SignUpStore.setAge(text)}
      />
      <DropdownComponent
        dataArray={GENDER_ARRAY}
        dropDownValue={String(gender)}
        onValueChange={valueGender => SignUpStore.setGender(valueGender)}
      />
      <DropdownComponent
        dataArray={RELIGION_ARRAY}
        dropDownValue={String(religion)}
        onValueChange={valueReligion => SignUpStore.setReligion(valueReligion)}
      />

      <TouchableOpacity
        onPress={() => {
          // console.log(gender);
          // console.log(religion);
        }}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          width: '50%',
          margin: 5,
        }}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.goBack();
      }}>
        <Text style={{color: 'blue'}}>already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
});
