/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Modal, View} from 'react-native';
import {getModalStore} from '../../../data/stores/modal-store';
import {CloseButton} from '../buttons/closeModalButton';
import {ModalDataDisplay} from './userModalComponents/modalDataDisplay';
import i18n from '../../i18n/i18n';
import {religionDisplay} from '../../../utils/religionDisplayFunction';
import {genderDisplay} from '../../../utils/genderDisplayFunction';
import {DynamicAlignView} from '../custom/dynamicAlignView';

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
          <DynamicAlignView
            containerStyle={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <ModalDataDisplay title={i18n.get('FULL_NAME')} value={fullName} />
            <ModalDataDisplay title={i18n.get('EMAIL')} value={email} />
            <ModalDataDisplay title={i18n.get('AGE')} value={age} />
            <ModalDataDisplay
              title={i18n.get('GENDER')}
              value={genderDisplay(gender)}
            />
            <ModalDataDisplay
              title={i18n.get('RELIGION')}
              value={religionDisplay(religion)}
            />
          </DynamicAlignView>
        </View>
      </View>
    </Modal>
  );
});
