/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import getTheme from '../shared/enhancedRenderer/store/themeStore';
export const MainPage = observer(() => {
  const theme = getTheme();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.getThemeData.get().secondaryColor,
        margin: 20,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: '900',
          paddingTop: 10,
          color: theme.getThemeData.get().textColor,
        }}>
        Hello World
      </Text>

      <View
        style={{
          backgroundColor: theme.getThemeData.get().primaryColor,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: theme.getThemeData.get().textColor}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium eos nisi placeat unde dicta eaque impedit exercitationem
          blanditiis dolorem cum expedita assumenda magni a reprehenderit, nulla
          pariatur dignissimos perferendis?
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.getThemeData.get().primaryColor,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: theme.getThemeData.get().textColor}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium eos nisi placeat unde dicta eaque impedit exercitationem
          blanditiis dolorem cum expedita assumenda magni a reprehenderit, nulla
          pariatur dignissimos perferendis?
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.getThemeData.get().primaryColor,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: theme.getThemeData.get().textColor}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          praesentium eos nisi placeat unde dicta eaque impedit exercitationem
          blanditiis dolorem cum expedita assumenda magni a reprehenderit, nulla
          pariatur dignissimos perferendis?
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.getThemeData.get().accentColor,
            padding: 10,
            borderRadius: 10,
            margin: 10,
          }}
          onPress={() => {
            theme.switchTheme();
          }}>
          <Text style={{color: theme.getThemeData.get().textColor}}>
            Change Theme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
