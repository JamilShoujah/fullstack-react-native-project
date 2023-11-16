/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {HomePage} from './pages/AvailableTasks';
// import {BottomAppBar} from './Bars/BottomBar';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <HomePage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
