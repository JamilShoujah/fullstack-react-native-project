/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {TabNavigation} from './SRC/Navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <TabNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
