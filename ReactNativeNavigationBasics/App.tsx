/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/Navigation/StackNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
