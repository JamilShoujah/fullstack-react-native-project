/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, Text, View} from 'react-native';
import {getModalStore} from '../../Data/Store/ModalStore';
import { CheckoutModalBody } from '../Prefabs/CheckoutModalPrefab';

export const CheckoutModal = observer(() => {
  const modalStore = getModalStore();
  return (
    <Modal
      transparent={true}
      visible={modalStore.isOpen.get()}
      onRequestClose={() => modalStore.closeModal}>
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
          <Text style={{fontWeight: '900', fontSize: 30}}>Checkout</Text>
          <CheckoutModalBody />
        </View>
      </View>
    </Modal>
  );
});
