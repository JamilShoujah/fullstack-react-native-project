/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const todolist = ['hello', 'hi', 'comsi', 'comsa', '😀', '😀'];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.fontView}>To-Do List:</Text>
          <View style={styles.listContainer}>
            {todolist.map((item, index) => (
              <Text key={index} style={styles.listText}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 575,
  },
  centeredView: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontView: {
    color: 'green',
    fontSize: 50,
  },
  button: {
    backgroundColor: 'blue',
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
  },
  container2: {
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: 'grey',
    width: '90%',
    borderRadius: 10,
    padding: 20,
  },
  listText: {
    fontSize: 30,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default App;
