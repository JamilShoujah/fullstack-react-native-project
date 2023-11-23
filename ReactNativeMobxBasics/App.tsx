/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {TabNavigation} from './Navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
// import {HomePage} from './Pages/HomePage';
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
