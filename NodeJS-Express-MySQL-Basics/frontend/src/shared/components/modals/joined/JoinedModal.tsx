/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../../enhancedRenderer/index';
import getGetPageModalStore from '../../../../store/modal-stores/get-page-modal';
import {CloseButton} from '../../buttons/CloseButton';
import {CourseIdGetPanel} from '../../custom/joined/getPage/CourseIdPanel';
import {StudentIdGetPanel} from '../../custom/joined/getPage/StudentIdPanel';

export const JoinedModal = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const joinedModalStore = getGetPageModalStore();
  return (
    <Modal
      transparent={true}
      visible={joinedModalStore.joinedModalVisible.get()}>
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
              Joined
            </Text>
            <CloseButton
              onPress={() => {
                joinedModalStore.changeJoinedModalVisibility(false);
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
            <CourseIdGetPanel />
            <TouchableOpacity
              onPress={() => {
                console.log('printing all students');
              }}
              style={{
                backgroundColor: colors.secondaryColor,
                paddingHorizontal: childX * 3,
                paddingVertical: childY * 2,
                marginVertical: childY * 1,
                borderRadius: childX * 2,
              }}>
              <Text
                style={{
                  color: colors.lightText,
                  fontSize: getFontSize(6),
                  fontWeight: 'bold',
                }}>
                Get all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});
