/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {TabNavigation} from './Navigation/TabNavigation';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1}} />
        </ScrollView>
      </SafeAreaView>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
