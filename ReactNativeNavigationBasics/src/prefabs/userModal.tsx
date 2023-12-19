/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, View} from 'react-native';
import {getModalStore} from '../store/modalStore';
import {CloseButton} from '../components/closeModalButton';
import {ModalDataDisplay} from '../components/modalDataDisplay';

export const ItemModal = observer(() => {
  const modalStore = getModalStore();
  const item = modalStore.item.get();
  const firstName = item.firstName;
  const lastName = item.lastName;
  const email = item.email;
  const age = item.age;
  const gender = item.gender;
  const religion = item.religion;
  const fullName = firstName + ' ' + lastName;
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
            alignItems: 'flex-start',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '90%',
          }}>
          <CloseButton />
          <ModalDataDisplay title={'Full name'} value={fullName} />
          <ModalDataDisplay title={'Email'} value={email} />
          <ModalDataDisplay title={'Age'} value={age} />
          <ModalDataDisplay title={'Gender'} value={gender} />
          <ModalDataDisplay title={'Religion'} value={religion} />
        </View>
      </View>
    </Modal>
  );
});
