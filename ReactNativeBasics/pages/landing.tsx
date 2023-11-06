/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Main({navigation}): JSX.Element {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Take a look at these diamonds wrong Its a life of squintin');
  }, [counter]);

  const Increment = () => {
    setCounter(prevCount => prevCount + 1);
  };
  const Decrement = () => {
    setCounter(prevCount => prevCount - 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centeredView}>
            <Text style={styles.fontView}>{counter}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={Increment}>
                <Text style={styles.buttonText}>Increment +</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={Decrement}>
                <Text style={styles.buttonText}>Decrement -</Text>
              </Pressable>
              <TouchableOpacity style={styles.button} onPress={Reset}>
                <Text style={styles.buttonText}> Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer2}>
              <Pressable
                style={styles.button2}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
              </Pressable>
              <Pressable style={styles.button2}>
                <Text style={styles.buttonText}>Stats</Text>
              </Pressable>
            </View>
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
    fontSize: 100,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button2: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Main;
