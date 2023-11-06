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

function Landing({navigation}): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centeredView}>
            <Text style={styles.fontView}>Welcome:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Landing')}>
              <Text style={styles.buttonText}>Next Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  centeredView: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontView: {
    color: 'orange',
    fontSize: 70,
  },
  button: {
    backgroundColor: 'red',
    padding: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Landing;
