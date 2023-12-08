/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, View} from 'react-native';
import {getModalStore} from '../../Data/Store/ModalStore';
import {ModalBottom} from '../Prefabs/ModalBottom';
import {ModalBody} from '../Prefabs/ModalItemBody';
import {ModalTop} from '../Prefabs/ModalTop';
import {CloseButton} from '../Prefabs/XButton';

export const ItemModal = observer(() => {
  const MODAL_STORE = getModalStore();
  return (
    <Modal
      transparent={true}
      visible={MODAL_STORE.isOpen.get()}
      onRequestClose={() => MODAL_STORE.closeModal}>
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
          <ModalTop />
          <ModalBody />
          <ModalBottom />
        </View>
      </View>
    </Modal>
  );
});
