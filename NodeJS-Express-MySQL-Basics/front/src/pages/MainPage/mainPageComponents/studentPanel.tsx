/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {StudentSearch} from './studentSearch';

export const StudentPanel = () => {
  return (
    <View>
      <Text style={{margin: 10, fontSize: 20}}>Student</Text>
      <StudentSearch
        placeholder={'Student ID'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
      <StudentSearch
        placeholder={'First Name'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
      <StudentSearch
        placeholder={'Last Name'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
      <StudentSearch
        placeholder={'Email Address'}
        value={''}
        onValueChange={(text: string) => {
          console.log(text);
        }}
        onPress={() => {
          console.log('hi');
        }}
      />
    </>
  );
};
