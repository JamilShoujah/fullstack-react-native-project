/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Search} from './search';

export const CoursePanel = () => {
  return (
    <View
      style={{
        backgroundColor: '#DCF2F1',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
      }}>
      <Text style={{margin: 10, fontSize: 20}}>Course</Text>
      <Search
        placeholder={'Course Name'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
      <Search
        placeholder={'Course ID'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
    </View>
  );
};
