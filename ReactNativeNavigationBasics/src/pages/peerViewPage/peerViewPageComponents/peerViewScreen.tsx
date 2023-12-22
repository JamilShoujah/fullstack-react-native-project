/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UserArrayMinusCurrentUserMap} from '../../../shared/components/custom/userArrayMinusCurrentUserMap';
import {ItemModal} from '../../../shared/components/userModal/userModal';

export const PeerViewScreen = () => {
  const {t} = useTranslation();
  const peerView = t('peerView');
  return (
    <View>
      <View style={{backgroundColor: 'blue', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '900',
            padding: 20,
            fontSize: 20,
          }}>
          {peerView}
        </Text>
      </View>
      <ScrollView style={{padding: 10}}>
        <UserArrayMinusCurrentUserMap />
      </ScrollView>

      <ItemModal />
    </View>
  );
};
