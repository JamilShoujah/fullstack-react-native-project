/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Main from './pages/main';
// import Landing from './pages/landing';

// function HomeScreen({navigation}) {
//   return <Main />;
// }

// function CountScreen({navigation}) {
//   return <Main />;
// }

// const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <View>
      {/* <Text>Hello</Text> */}
      <Main />
      {/* <Landing /> */}
    </View>
  );
}

export default App;

// <NavigationContainer>
{
  /* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CountScreen} />
      </Stack.Navigator> */
}
// </NavigationContainer>
