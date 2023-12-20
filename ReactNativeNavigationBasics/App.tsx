/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/Navigation/StackNavigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/services/i18next';
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <I18nextProvider i18n={i18n}>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigation />
        </SafeAreaView>
      </I18nextProvider>
    </NavigationContainer>
  );
}

export default App;
