/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {getLanguageStore} from '../../../data/stores/right-to-left-language-store';
import {IDynamicContainerProps} from '../../../data/types/ComponentInterfaces/dynamicViewInterface';

export const DynamicView: React.FC<IDynamicContainerProps> = ({
  children,
  containerStyle,
}) => {
  const lang = getLanguageStore();
  const isR2L = lang.isRighttoLeft.get();
  return (
    <View
      style={{
        flexDirection: isR2L ? 'row-reverse' : 'row',
        ...containerStyle,
      }}>
      {children}
    </View>
  );
};
