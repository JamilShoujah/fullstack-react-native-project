/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TabBarNav} from './src/navigation/TabBarNavigation';
import {getTheme} from './src/shared/enhancedRenderer/theme/getTheme';
import {MyThemeProvider} from './src/shared/enhancedRenderer/theme/index';

function App(): React.JSX.Element {
  const myTheme = getTheme();
  const colors = myTheme.getThemeData.get().colors;
  return (
    <MyThemeProvider themeValue={myTheme.getThemeData.get()}>
      <NavigationContainer>
        <SafeAreaView
          style={{
            backgroundColor: colors.backgroundColor,
          }}></SafeAreaView>
        <TabBarNav />
      </NavigationContainer>
    </MyThemeProvider>
  );
}

export default App;
