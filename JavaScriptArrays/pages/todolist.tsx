/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {dataArray, Item} from '../components/dataList';
function ToDoList(): JSX.Element {
  const [items, setItems] = useState<Item[]>(dataArray);

  const handlePress = (itemId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  // const handlePressAdd = (itemId: number) => {
  //   setItems(currentItems => currentItems.push(Item);
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.fontView}>To-Do List:</Text>
          <View style={styles.listContainer}>
            {items.map(item => (
              <View key={item.id} style={styles.listBox}>
                <Text style={styles.listTitle}>{item.title}:</Text>
                <Text style={styles.listText}>{item.description}</Text>
                {/* <Text style={styles.listText}>{item.id}</Text> */}
                <View style={styles.rightSide}>
                  <View style={styles.columnLayout}>
                    <TouchableOpacity
                      style={styles.completeButton}
                      onPress={() => {
                        handlePress(item.id);
                      }}>
                      <Text style={styles.buttonText}>done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton}>
                      <Text style={styles.buttonText}>edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => {
                        handlePress(item.id);
                      }}>
                      <Text style={styles.buttonText}>delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.addButton}>+</Text>
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
    padding: 30,
    fontWeight: '900',
  },
  button: {
    backgroundColor: 'blue',
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 0,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  container2: {
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: 'grey',
    width: '90%',
    borderRadius: 10,
    padding: 5,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 10,
  },
  listBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  editButton: {
    backgroundColor: 'orange',
    width: 50,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignContent: 'center',
  },
  completeButton: {
    backgroundColor: 'green',
    width: 50,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignContent: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 50,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignContent: 'center',
  },
  addButton: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  columnLayout: {
    flexDirection: 'column',
  },
});

export default ToDoList;
