/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getStudentDetailStore from '../../../data/store/post-page-student-store';
import {AddressPanel} from '../../../shared/components/custom/AddressPanel';
import {DatePickerComponent} from '../../../shared/components/custom/DatePicker';
import {EmailAddressPanel} from '../../../shared/components/custom/EmailAddressPanel';
import {FirstNamePanel} from '../../../shared/components/custom/FirstNamePanel';
import {LastNamePanel} from '../../../shared/components/custom/LastNamePanel';
import {PhoneNumberPanel} from '../../../shared/components/custom/PhoneNumberPanel';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';

export const StudentDetailsPanel = withLiteObserverAndTheme(props => {
  const studentDetails = getStudentDetailStore();
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  return (
    <View>
      <Text
        style={{
          marginVertical: childY * 3,
          fontSize: getFontSize(8),
          color: colors.lightText,
          fontWeight: 'bold',
        }}>
        Student Details
      </Text>
      <View
        style={{
          backgroundColor: colors.secondaryLight,
          borderRadius: childX * 3,
          marginVertical: childY * 1,
          paddingHorizontal: childX * 1,
          paddingVertical: childY * 3,
          alignItems: 'center',
        }}>
        <FirstNamePanel />
        <LastNamePanel />
        <EmailAddressPanel />
        <DatePickerComponent />
        <AddressPanel />
        <PhoneNumberPanel />

        <TouchableOpacity
          onPress={() => {
            console.log(studentDetails.userObject.get());
          }}
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: 2 * childX,
            width: 10 * childX,
            height: 10 * childY,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.lightText,
              fontSize: getFontSize(8),
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
