/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DropdownComponent from '../components/dropDownComponent';
import {TextInputField} from '../components/textInputComponent';
import {IPageInterface} from '../ComponentInterfaces/PagesInterface';
import {GENDER_ARRAY} from '../constants/GenderDropdownArray';
import {RELIGION_ARRAY} from '../constants/ReligionDropdownArray';
import {getSignUpStore} from '../store/signUpStore';
import {NumericInputField} from '../components/numericInputComponent';
import {signUpDetailValidation} from '../store/login-store/sign-up-details-verification';

export const SignUpDetailsScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const signUpStore = getSignUpStore();
    const firstName = signUpStore.firstName.get();
    const lastName = signUpStore.lastName.get();
    const age = signUpStore.age.get();
    const gender = signUpStore.gender.get();
    const religion = signUpStore.religion.get();

    return (
      <View style={{flex: 1, width: '80%', padding: 10, alignItems: 'center'}}>
        <TextInputField
          placeholder={'first name'}
          value={firstName}
          onValueChange={text => signUpStore.setFirstName(text.trim())}
        />
        <TextInputField
          placeholder={'last name'}
          value={lastName}
          onValueChange={text => signUpStore.setLastName(text.trim())}
        />
        <NumericInputField
          placeholder={'age'}
          value={age}
          onValueChange={text => signUpStore.setAge(text.trim())}
        />
        <DropdownComponent
          dataArray={GENDER_ARRAY}
          dropDownValue={String(gender)}
          onValueChange={valueGender => signUpStore.setGender(valueGender)}
          type={'gender'}
        />

        <DropdownComponent
          dataArray={RELIGION_ARRAY}
          dropDownValue={String(religion)}
          onValueChange={valueReligion =>
            signUpStore.setReligion(valueReligion)
          }
          type={'religion'}
        />

        <TouchableOpacity
          onPress={() => {
            signUpDetailValidation(navigation);
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
      </View>
    );
  },
);
