/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TabBarNav} from './src/navigation/tabBarNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor: '#0F1035',
        }}></SafeAreaView>
      <TabBarNav />
    </NavigationContainer>
  );
}

export default App;
