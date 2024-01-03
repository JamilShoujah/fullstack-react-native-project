/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {CoursePanel} from './mainPageComponents/coursePanel';
import {StudentPanel} from './mainPageComponents/studentPanel';

export const MainPage = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#7FC7D9',
        padding: 20,
        borderRadius: 10,
        margin: 20,
      }}>
      <Text
        style={{
          color: '#0F1035',
          fontSize: 30,
          fontWeight: '900',
          textAlign: 'center',
          padding: 10,
        }}>
        Admin
      </Text>
      <StudentPanel />
      <CoursePanel />
    </View>
  );
};
