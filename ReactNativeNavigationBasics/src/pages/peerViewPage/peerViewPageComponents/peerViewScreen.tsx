/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {UserArrayMinusCurrentUserMap} from '../../../shared/components/custom/userArrayMinusCurrentUserMap';
import {ItemModal} from '../../../shared/components/userModal/userModal';
import i18n from '../../../shared/i18n/i18n';

export const PeerViewScreen = observer(() => {
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
          {i18n.get('PEER_VIEW')}
        </Text>
      </View>
      <ScrollView style={{padding: 10}}>
        <UserArrayMinusCurrentUserMap />
      </ScrollView>

      <ItemModal />
    </View>
  );
});
