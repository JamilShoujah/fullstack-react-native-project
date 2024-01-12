/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {withLiteObserverAndTheme} from '../../shared/enhancedRenderer/index';
import {CoursePanel} from './searchPageComponents/coursePanel';
import {StudentPanel} from './searchPageComponents/studentPanel';

export const SearchPage = withLiteObserverAndTheme(props => {
  const {theme} = props;
  const {colors, unitX, childX, unitY, childY, getFontSize} = theme;
  return (
    <ScrollView style={{backgroundColor: colors.backgroundColor}}>
      <View
        style={{
          paddingHorizontal: unitX * 3,
          paddingTop: unitY * 5,
          marginHorizontal: unitX * 5,
        }}>
        <Text
          style={{
            color: colors.primaryColor,
            fontSize: getFontSize(15),
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
});
