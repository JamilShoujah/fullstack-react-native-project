/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalVisibileStore';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const ItemModal = observer(() => {
  return (
    <Modal transparent={true} visible={ModalVisible.isOpen}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '80%',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={() => {
              ModalVisible.CloseModal();
            }}>
            <EntypoIcon name="cross" size={30} color="orangered" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
            }}>
            Hi
          </Text>
          {/* <View style={{flexDirection: 'row'}}>
            </View> */}
        </View>
      </View>
    </Modal>
  );
});
