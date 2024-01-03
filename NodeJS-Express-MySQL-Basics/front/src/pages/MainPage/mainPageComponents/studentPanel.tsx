/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import getInputFieldStore from '../../../data/store/textFieldStore';
import {Search} from './search';

export const StudentPanel = observer(() => {
  const textFieldStore = getInputFieldStore();
  return (
    <View
      style={{
        backgroundColor: '#DCF2F1',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
      }}>
      <Text style={{margin: 10, fontSize: 20}}>Student</Text>
      <Search
        placeholder={'Student ID'}
        value={textFieldStore.studentId.get()}
        onValueChange={(text: string) => {
          textFieldStore.setStudentId(text);
        }}
        onPress={() => {
          // to be implmented
          console.log(textFieldStore.studentId.get());
          textFieldStore.setStudentId('');
        }}
      />
      <Search
        placeholder={'First Name'}
        value={textFieldStore.firstName.get()}
        onValueChange={(text: string) => {
          textFieldStore.setFirstName(text);
        }}
        onPress={() => {
          // to be implemented
          console.log(textFieldStore.firstName.get());
          textFieldStore.setFirstName('');
        }}
      />
      <Search
        placeholder={'Last Name'}
        value={textFieldStore.lastName.get()}
        onValueChange={(text: string) => {
          textFieldStore.setLastName(text);
        }}
        onPress={() => {
          // to be implemented
          console.log(textFieldStore.lastName.get());
          textFieldStore.setLastName('');
        }}
      />
      <Search
        placeholder={'Email Address'}
        value={textFieldStore.emailAddress.get()}
        onValueChange={(text: string) => {
          textFieldStore.setEmailAddress(text);
        }}
        onPress={() => {
          // to be implemented
          console.log(textFieldStore.emailAddress.get());
          textFieldStore.setEmailAddress('');
        }}
      />
    </View>
  );
});
