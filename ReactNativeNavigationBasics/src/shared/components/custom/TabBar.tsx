/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';
import i18n from '../../i18n/i18n';
import {BottomBarButtons} from '../buttons/bottomBarButtons';
export const BottomTabBar = () => {
  const navigation = useNavigation();
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
  return (
    <View
      style={{
        backgroundColor: 'blue',
        width: '100%',
        padding: 5,
        flexDirection: isR2L ? 'row-reverse' : 'row',
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
    </View>
  );
};
