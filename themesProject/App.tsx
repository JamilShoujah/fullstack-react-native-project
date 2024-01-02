/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainPage} from './src/MainPage/index';
import {ThemeProvider} from './src/shared/enhancedRenderer/store/index';
import getTheme from './src/shared/enhancedRenderer/store/themeStore';

const App = observer(() => {
  const theme = getTheme();
  return (
    <ThemeProvider themeValue={theme.getThemeData.get()}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.getThemeData.get().primaryColor,
        }}>
        <MainPage />
      </SafeAreaView>
    </ThemeProvider>
  );
});

export default App;
