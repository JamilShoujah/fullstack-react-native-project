/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import i18n from '../../i18n/i18n';
import {BottomBarButtons} from '../buttons/bottomBarButtons';
import {DynamicView} from './dynamicView';

export const BottomTabBar = () => {
  const navigation = useNavigation();
  return (
    <DynamicView
      containerStyle={{
        backgroundColor: 'blue',
        width: '100%',
        padding: 5,
        justifyContent: 'space-around',
      }}>
      <BottomBarButtons
        title={i18n.get('PROFILE')}
        name={'user'}
        onPress={() => {
          navigation.navigate('profile');
        }}
      />
      <BottomBarButtons
        title={i18n.get('PEER_VIEW')}
        name={'users'}
        onPress={() => {
          navigation.navigate('peerView');
        }}
      />
    </DynamicView>
  );
};
