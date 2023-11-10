/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View} from 'react-native';
// import PopUp from './pages/popup';
import ToDoList from './pages/todolist';
function App(): JSX.Element {
  return (
    <View>
      {/* <PopUp /> */}
      <ToDoList />
    </View>
  );
}

export default App;
