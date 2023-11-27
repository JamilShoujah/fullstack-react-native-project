/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {ModalVisible} from '../../Data/Store/ModalVisibileStore';
import {ModalBottom} from '../Prefabs/ModalBottom';
import {ModalBody} from '../Prefabs/ModalItemBody';
import {CloseButton} from '../Prefabs/XButton';

export const ItemModal = observer(() => {
  return (
    <Modal
      transparent={true}
      visible={ModalVisible.isOpen}
      onRequestClose={() => ModalVisible.CloseModal}>
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
          <CloseButton />
          <Image
            source={{uri: ModalVisible.MarketItem?.Icon}}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              borderWidth: 2,
              margin: 10,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
            }}>
            {ModalVisible.MarketItem?.Name}
          </Text>
          <ModalBody />
          <ModalBottom />
        </View>
      </View>
    </Modal>
  );
});
