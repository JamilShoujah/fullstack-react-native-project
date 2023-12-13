import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SignUpPage} from './src/Pages/signUpPage';
import {SignUpUserDetailsPage} from './src/Pages/signUpUseDetails';
import { StackNavigation } from './src/Navigation/StackNavigation';
import { LogInPage } from './src/Pages/logInPage';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {/* <SignUpPage navigation={undefined} /> */}
        {/* <SignUpUserDetailsPage navigation={undefined} /> */}
        <StackNavigation />
        {/* <LogInPage navigation={undefined} /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
