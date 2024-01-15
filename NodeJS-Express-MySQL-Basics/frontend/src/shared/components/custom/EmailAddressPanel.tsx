import React from 'react';
import {Text, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../enhancedRenderer/index';
import {FullTextInputField} from '../inputs/FullsizeInputText';

export const EmailAddressPanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  return (
    <View>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Email Address:
      </Text>
      <FullTextInputField
        placeholder={'Email Address'}
        value={''}
        onValueChange={() => {}}
      />
    </View>
  );
});
