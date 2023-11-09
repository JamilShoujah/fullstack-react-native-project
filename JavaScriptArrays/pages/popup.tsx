/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function PopUp(): JSX.Element {
  const [value, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>New Task</Text>
          <Text>{modalVisible}</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Task Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="Task Description"
          />
          <View style={styles.popUpButtonLayout}>
            <TouchableOpacity
              style={styles.addbutton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.addbutton, {backgroundColor: 'red'}]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: 250,
    margin: 5,
  },
  addbutton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  popUpButtonLayout: {
    flexDirection: 'row',
  },
});

export default PopUp;
