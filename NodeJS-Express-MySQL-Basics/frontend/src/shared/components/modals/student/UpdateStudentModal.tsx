/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {getPutPageModalStore} from '../../../../store/modal-stores/index';
import {CloseButton} from '../../buttons/CloseButton';
import getStudentDetailStore from '../../../../store/student-store/student-store';
import {CustomButton} from '../../buttons/CustomButton';
import {AddressPostPanel} from '../../custom/student/postPage/AddressPanel';
import {DatePickerComponent} from '../../custom/student/postPage/DatePicker';
import {EmailAddressPostPanel} from '../../custom/student/postPage/EmailAddressPanel';
import {FirstNamePostPanel} from '../../custom/student/postPage/FirstNamePanel';
import {LastNamePostPanel} from '../../custom/student/postPage/LastNamePanel';
import {PhoneNumberPostPanel} from '../../custom/student/postPage/PhoneNumberPanel';
import {updateStudent} from '../../../data/api/putApi/update-student-details';

export const StudentUpdateModal = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const studentModal = getPutPageModalStore();
  return (
    <Modal transparent={true} visible={studentModal.studentModalVisible.get()}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.modalBackground,
        }}>
        <View
          style={{
            backgroundColor: colors.secondaryColor,
            borderRadius: childX * 3,
            paddingHorizontal: childX * 3,
            paddingVertical: childY,
            marginVertical: childY * 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
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
            <CloseButton
              onPress={() => {
                studentModal.changeStudentModalVisibility(false);
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: colors.secondaryLight,
              borderRadius: childX * 3,
              marginVertical: childY * 3,
              paddingHorizontal: childX * 1,
              paddingVertical: childY * 1,
              alignItems: 'center',
            }}>
            <FirstNamePostPanel />
            <LastNamePostPanel />
            <EmailAddressPostPanel />
            <DatePickerComponent />
            <AddressPostPanel />
            <PhoneNumberPostPanel />
            <CustomButton
              placeHolder={'upload'}
              onPress={() => {
                updateStudent();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});
