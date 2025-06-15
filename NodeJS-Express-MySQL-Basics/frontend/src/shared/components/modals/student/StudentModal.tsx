/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import {getGetPageModalStore} from '../../../../store/modal-stores/index';
import {CloseButton} from '../../buttons/CloseButton';
import {StudentFirstNameGetPanel} from '../../custom/student/getPage/StudentFirstNamePanel';
import {StudentLastNameGetPanel} from '../../custom/student/getPage/StudentLastNamePanel';
import {StudentEmailGetPanel} from '../../custom/student/getPage/StudentEmailPanel';
import {StudentIdGetPanel} from '../../custom/student/getPage/StudentIdPanel';
import {GetAllButton} from '../../buttons/GetAllButton';
import {fetchAllStudents} from '../../../data/api/getApi/student/get-all-students';
import getStudentDetailStore from '../../../../store/student-store/student-store';

export const StudentModal = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const studentModal = getGetPageModalStore();
  const studentDetails = getStudentDetailStore();
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
                // studentDetails.setStudentId('');
                // studentDetails.setFirstName('');
                // studentDetails.setLastName('');
                // studentDetails.setEmailAddress('');
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
            <StudentIdGetPanel />
            <StudentFirstNameGetPanel />
            <StudentLastNameGetPanel />
            <StudentEmailGetPanel />
            <GetAllButton
              onPress={() => {
                fetchAllStudents();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});
