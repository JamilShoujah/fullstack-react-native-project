/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, View} from 'react-native';
import {getModalStore} from '../../../data/stores/modal-store';
import {CloseButton} from '../buttons/closeModalButton';
import {ModalDataDisplay} from './userModalComponents/modalDataDisplay';
import {useTranslation} from 'react-i18next';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';

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

  const {t} = useTranslation();
  const fullName_ = t('fullname');
  const email_ = t('email');
  const age_ = t('age');
  const gender_ = t('gender');
  const religion_ = t('religion');

  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
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
          <View
            style={{
              alignItems: isR2L ? 'flex-end' : 'flex-start',
              justifyContent: 'center',
            }}>
            <ModalDataDisplay title={fullName_} value={fullName} />
            <ModalDataDisplay title={email_} value={email} />
            <ModalDataDisplay title={age_} value={age} />
            <ModalDataDisplay title={gender_} value={gender} />
            <ModalDataDisplay title={religion_} value={religion} />
          </View>
        </View>
      </View>
    </Modal>
  );
});
