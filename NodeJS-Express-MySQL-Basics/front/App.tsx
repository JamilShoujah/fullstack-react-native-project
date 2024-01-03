/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainPage} from './src/pages/MainPage/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0F1035',
      }}>
      <MainPage />
    </SafeAreaView>
  );
}

export default App;
