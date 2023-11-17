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
import {AvailableTasksPage} from './pages/AvailableTasks';
// import {InProgressPage} from './pages/InProgressTask';
// import {BottomAppBar} from './Bars/BottomBar';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <AvailableTasksPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
