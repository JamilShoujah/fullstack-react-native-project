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
import {signUpDetailValidation} from '../functions/SignUpDetailsVerification';

export const SignUpDetailsScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
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
          onValueChange={text => SignUpStore.setFirstName(text.trim())}
        />
        <TextInputField
          placeholder={'last name'}
          value={lastName}
          onValueChange={text => SignUpStore.setLastName(text.trim())}
        />
        <NumericInputField
          placeholder={'age'}
          value={age}
          onValueChange={text => SignUpStore.setAge(text.trim())}
        />
        <DropdownComponent
          dataArray={GENDER_ARRAY}
          dropDownValue={String(gender)}
          onValueChange={valueGender => SignUpStore.setGender(valueGender)}
          type={'gender'}
        />

        <DropdownComponent
          dataArray={RELIGION_ARRAY}
          dropDownValue={String(religion)}
          onValueChange={valueReligion =>
            SignUpStore.setReligion(valueReligion)
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
