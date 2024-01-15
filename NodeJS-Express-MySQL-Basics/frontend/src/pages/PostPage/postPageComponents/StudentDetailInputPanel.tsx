/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DatePickerComponent} from '../../../shared/components/custom/DatePicker';
import {EmailAddressPanel} from '../../../shared/components/custom/EmailAddressPanel';
import {FirstNamePanel} from '../../../shared/components/custom/FirstNamePanel';
import {LastNamePanel} from '../../../shared/components/custom/LastNamePanel';
import {PhoneNumberPanel} from '../../../shared/components/custom/PhoneNumberPanel';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';

export const StudentDetailsPanel = withLiteObserverAndTheme(props => {
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
        }}>
        <FirstNamePanel />
        <LastNamePanel />
        <EmailAddressPanel />
        <DatePickerComponent />
        <PhoneNumberPanel />

        <TouchableOpacity
          style={{
            marginHorizontal: 3 * childX,
            marginVertical: 3 * childY,
            backgroundColor: colors.secondaryColor,
            borderRadius: 2 * childX,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.lightText,
              paddingHorizontal: 5 * childX,
              paddingVertical: 5 * childY,
              fontSize: getFontSize(8),
            }}>
            Add New Student
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
