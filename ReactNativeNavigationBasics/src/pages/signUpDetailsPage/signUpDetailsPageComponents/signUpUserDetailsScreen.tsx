/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DropdownComponent from '../../../shared/components/dropDownFields/dropDownComponent';
import {TextInputField} from '../../../shared/components/inputFields/textInputComponent';
import {IPageInterface} from '../../../data/types/ComponentInterfaces/PagesInterface';
import {GENDER_ARRAY} from '../../../data/constants/GenderDropdownArray';
import {RELIGION_ARRAY} from '../../../data/constants/ReligionDropdownArray';
import {getSignUpStore} from '../../../data/stores/sign-up-store';
import {NumericInputField} from '../../../shared/components/inputFields/numericInputComponent';
import {signUpDetailValidation} from '../../../utils/sign-up-details-verification';
import {useTranslation} from 'react-i18next';
import {EGender} from '../../../data/types/enums/genderEnum';
import {EReligion} from '../../../data/types/enums/religionEnum';

export const SignUpDetailsScreen: React.FC<IPageInterface> = observer(
  ({navigation}) => {
    const signUpStore = getSignUpStore();
    const firstName = signUpStore.firstName.get();
    const lastName = signUpStore.lastName.get();
    const age = signUpStore.age.get();
    const gender = signUpStore.gender.get();
    const religion = signUpStore.religion.get();
    const {t} = useTranslation();
    const firstName_ = t('firstName');
    const lastName_ = t('lastName');
    const age_ = t('age');
    const gender_ = t('gender');
    const religion_ = t('religion');
    const submit_ = t('submit');
    return (
      <View style={{flex: 1, width: '80%', padding: 10, alignItems: 'center'}}>
        <TextInputField
          placeholder={firstName_}
          value={firstName}
          onValueChange={(text: string) =>
            signUpStore.setFirstName(text.trim())
          }
        />
        <TextInputField
          placeholder={lastName_}
          value={lastName}
          onValueChange={(text: string) => signUpStore.setLastName(text.trim())}
        />
        <NumericInputField
          placeholder={age_}
          value={age}
          onValueChange={(text: string) => signUpStore.setAge(text.trim())}
        />
        <DropdownComponent
          dataArray={GENDER_ARRAY}
          dropDownValue={String(gender)}
          onValueChange={(valueGender: EGender) =>
            signUpStore.setGender(valueGender)
          }
          type={gender_}
        />

        <DropdownComponent
          dataArray={RELIGION_ARRAY}
          dropDownValue={String(religion)}
          onValueChange={(valueReligion: EReligion) =>
            signUpStore.setReligion(valueReligion)
          }
          type={religion_}
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
          <Text style={{color: 'white'}}>{submit_}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
