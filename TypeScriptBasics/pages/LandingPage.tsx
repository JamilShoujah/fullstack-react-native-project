/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {LetsGo} from '../components/Buttons/LetsGoButton';

export const LandingPage = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 700,
      }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'blue',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '900',
            padding: 20,
          }}>
          My Task Manager
        </Text>
        <LetsGo
          navFunction={() => {
            console.log('test');
            // to implement navigation
          }}
        />
      </View>
    </View>
  );
};
