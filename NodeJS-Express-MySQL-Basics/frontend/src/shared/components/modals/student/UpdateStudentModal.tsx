/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {getPutPageModalStore} from '../../../../store/modal-stores/index';
import {CloseButton} from '../../buttons/CloseButton';
import getStudentDetailStore from '../../../../store/student-store/student-store';
import {CustomButton} from '../../buttons/CustomButton';
import {updateStudent} from '../../../data/api/putApi/update-student-details';
import {AddressPutPanel} from '../../custom/student/putPage/AddressPanel';
import {DatePickerPutComponent} from '../../custom/student/putPage/DatePicker';
import {FirstNamePutPanel} from '../../custom/student/putPage/FirstNamePanel';
import {LastNamePutPanel} from '../../custom/student/putPage/LastNamePanel';
import {PhoneNumberPutPanel} from '../../custom/student/putPage/PhoneNumberPanel';
import {EmailAddressPutPanel} from '../../custom/student/putPage/EmailAddressPanel';

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
            <FirstNamePutPanel />
            <LastNamePutPanel />
            <EmailAddressPutPanel />
            <DatePickerPutComponent />
            <AddressPutPanel />
            <PhoneNumberPutPanel />
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
