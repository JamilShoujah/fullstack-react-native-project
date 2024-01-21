/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import getStudentDetailStore from '../../../store/student-store/student-store';
import {AddressPostPanel} from '../../../shared/components/custom/student/postPage/AddressPanel';
import {DatePickerComponent} from '../../../shared/components/custom/student/postPage/DatePicker';
import {EmailAddressPostPanel} from '../../../shared/components/custom/student/postPage/EmailAddressPanel';
import {FirstNamePostPanel} from '../../../shared/components/custom/student/postPage/FirstNamePanel';
import {LastNamePostPanel} from '../../../shared/components/custom/student/postPage/LastNamePanel';
import {PhoneNumberPostPanel} from '../../../shared/components/custom/student/postPage/PhoneNumberPanel';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {addNewStudent} from '../../../shared/data/api/postApi/student/add-new-student';

export const StudentDetailsPanel = withLiteObserverAndTheme(props => {
  const studentDetails = getStudentDetailStore();
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
        <FirstNamePostPanel />
        <LastNamePostPanel />
        <EmailAddressPostPanel />
        <DatePickerComponent />
        <AddressPostPanel />
        <PhoneNumberPostPanel />

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              addNewStudent();
            }}
            style={{
              backgroundColor: colors.secondaryColor,
              borderRadius: 2 * childX,
              width: 10 * childX,
              height: 10 * childY,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: childX * 2,
            }}>
            <Text
              style={{
                color: colors.lightText,
                fontSize: getFontSize(8),
              }}>
              +
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              studentDetails.setFirstName('');
              studentDetails.setLastName('');
              studentDetails.setEmailAddress('');
              studentDetails.setBirthDay('');
              studentDetails.setBirthMonth('');
              studentDetails.setBirthYear('');
              studentDetails.setAddress('');
              studentDetails.setPhoneNumber('');
            }}
            style={{
              backgroundColor: colors.warningColor,
              borderRadius: 2 * childX,
              width: 15 * childX,
              height: 10 * childY,
              marginHorizontal: childX * 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.lightText,
                fontSize: getFontSize(6),
              }}>
              clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});
