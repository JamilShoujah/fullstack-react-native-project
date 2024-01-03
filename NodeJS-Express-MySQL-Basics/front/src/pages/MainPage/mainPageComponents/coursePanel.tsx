/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import getInputFieldStore from '../../../data/store/textFieldStore';
import {Search} from './search';

export const CoursePanel = observer(() => {
  const textFieldStore = getInputFieldStore();
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
        value={textFieldStore.courseName.get()}
        onValueChange={(text: string) => {
          textFieldStore.setCourseName(text);
        }}
        onPress={() => {
          // to be implemented
          console.log(textFieldStore.courseName.get());
          textFieldStore.setCourseName('');
        }}
      />
      <Search
        placeholder={'Course ID'}
        value={textFieldStore.courseId.get()}
        onValueChange={(text: string) => {
          textFieldStore.setCourseId(text);
        }}
        onPress={() => {
          // to be implemented
          console.log(textFieldStore.courseId.get());
          textFieldStore.setCourseId('');
        }}
      />
    </View>
  );
});
