/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainPage} from './src/pages/index';
import {withLiteObserverAndTheme} from './src/shared/enhancedRenderer/index';
import {ThemeProvider} from './src/shared/enhancedRenderer/store/index';
import getTheme from './src/shared/enhancedRenderer/store/themeStore';

const App = withLiteObserverAndTheme(() => {
  const theme = getTheme();
  return (
    <ThemeProvider themeValue={theme.getThemeData.get()}>
      <SafeAreaView>
        <MainPage />
      </SafeAreaView>
    </ThemeProvider>
  );
});

export default App;
