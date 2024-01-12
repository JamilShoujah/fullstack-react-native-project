/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import getInputFieldStore from '../../../data/store/textFieldStore';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {SearchPanel} from './searchPanel';

export const StudentPanel = withLiteObserverAndTheme(props => {
  const textFieldStore = getInputFieldStore();
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <View
      style={{
        backgroundColor: colors.secondaryColor,
        borderRadius: childX * 3,
        paddingHorizontal: childX * 3,
        paddingVertical: childY,
        marginVertical: childY * 3,
      }}>
      <Text
        style={{
          marginTop: childY * 3,
          fontSize: getFontSize(8),
          color: colors.lightText,
          fontWeight: 'bold',
        }}>
        Student
      </Text>
      <View
        style={{
          backgroundColor: colors.secondaryLight,
          borderRadius: childX * 3,
          marginVertical: childY * 3,
          paddingHorizontal: childX * 1,
          paddingVertical: childY * 1,
        }}>
        <SearchPanel
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
        <SearchPanel
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
        <SearchPanel
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
        <SearchPanel
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
    </View>
  );
});
