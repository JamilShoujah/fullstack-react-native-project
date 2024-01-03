/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {withLiteObserverAndTheme} from '../shared/enhancedRenderer/index';
import getTheme from '../shared/enhancedRenderer/store/themeStore';
export const MainPage = withLiteObserverAndTheme(props => {
  const themeStore = getTheme();
  const {theme} = props;
  const {colors, unitX, childX, unitY, childY, getFontSize} = theme;
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondaryColor,
      }}>
      <Text
        style={{
          fontSize: getFontSize(20),
          fontWeight: '900',
          lineHeight: 20 * childY,
          letterSpacing: 1 * childX,
          color: colors.textColor,
        }}>
        Hello World
      </Text>

      <View
        style={{
          backgroundColor: colors.primaryColor,
          paddingHorizontal: 10 * childX,
          paddingVertical: 5 * childY,
          marginVertical: 3 * childY,
          marginHorizontal: 5 * childX,
          borderRadius: 10 * childY,
        }}>
        <Text style={{color: colors.textColor}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium eos nisi placeat unde dicta eaque impedit exercitationem
          blanditiis dolorem cum expedita assumenda magni a reprehenderit, nulla
          pariatur dignissimos perferendis?
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.accentColor,
            paddingHorizontal: 10 * childX,
            paddingVertical: 5 * childY,
            marginVertical: 3 * childY,
            marginHorizontal: 5 * childX,
            borderRadius: 10 * childY,
          }}
          onPress={() => {
            themeStore.switchTheme();
          }}>
          <Text style={{color: colors.textColor}}>Change Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
