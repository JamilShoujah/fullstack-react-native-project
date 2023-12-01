/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {TabNavigation} from './SRC/Navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View style={{flex: 1}}>{/* <HomePage /> */}</View>
      </SafeAreaView>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
