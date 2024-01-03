/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CoursePanel} from './searchPageComponents/coursePanel';
import {StudentPanel} from './searchPageComponents/studentPanel';

export const SearchPage = () => {
  return (
    <ScrollView style={{backgroundColor: '#0F1035'}}>
      <View
        style={{
          backgroundColor: '#7FC7D9',
          padding: 20,
          borderRadius: 10,
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <Text
          style={{
            color: '#0F1035',
            fontSize: 30,
            fontWeight: '900',
            textAlign: 'center',
          }}>
          Search
        </Text>
        <StudentPanel />
        <CoursePanel />
      </View>
    </ScrollView>
  );
};
