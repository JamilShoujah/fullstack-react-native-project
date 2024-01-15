import React from 'react';
import {Text, View} from 'react-native';
import {withLiteObserverAndTheme} from '../../enhancedRenderer/index';
import {MicroTextInputField} from '../inputs/MicroTextInput';

export const DatePickerComponent = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {childX, getFontSize} = theme;
  return (
    <View>
      <Text style={{fontSize: getFontSize(4), paddingHorizontal: childX * 2}}>
        Date of Birth:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MicroTextInputField
          placeholder={'day'}
          value={''}
          onValueChange={() => {}}
        />
        <Text style={{fontSize: getFontSize(12)}}>/</Text>
        <MicroTextInputField
          placeholder={'month'}
          value={''}
          onValueChange={() => {}}
        />
        <Text style={{fontSize: getFontSize(12)}}>/</Text>
        <MicroTextInputField
          placeholder={'year'}
          value={''}
          onValueChange={() => {}}
        />
      </View>
    </View>
  );
});
