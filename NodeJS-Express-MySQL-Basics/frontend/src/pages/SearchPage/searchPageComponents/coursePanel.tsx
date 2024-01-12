/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import getInputFieldStore from '../../../data/store/textFieldStore';
import {withLiteObserverAndTheme} from '../../../shared/enhancedRenderer/index';
import {SearchPanel} from './searchPanel';

export const CoursePanel = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, childX, childY, getFontSize} = theme;
  const textFieldStore = getInputFieldStore();
  return (
    <View
      style={{
        backgroundColor: colors.secondaryColor,
        borderRadius: childX * 3,
        paddingHorizontal: childX * 3,
        paddingVertical: childY,
        marginVertical: childY * 3,
      }}>
      <Text
        style={{
          marginTop: childY * 3,
          fontSize: getFontSize(8),
          color: colors.lightText,
          fontWeight: 'bold',
        }}>
        Course
      </Text>
      <View
        style={{
          backgroundColor: colors.secondaryLight,
          borderRadius: childX * 3,
          marginVertical: childY * 3,
          paddingHorizontal: childX * 1,
          paddingVertical: childY * 1,
        }}>
        <SearchPanel
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
        <SearchPanel
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
    </View>
  );
});
