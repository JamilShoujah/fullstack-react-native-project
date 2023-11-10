/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Modal, View, Text, TextInput} from 'react-native';
import {
  CancelNewButtonComponent,
  Edit_ButtonComponent,
} from '../components/buttons';
import {Item} from '../components/dataList';
export interface EditPopUpProps {
  visible: boolean;
  onclose: () => void;
  arrayUpdate: (item: Item) => void;
  title: string;
  description: string;
  id: number;
  array: Item[];
}

export const EditPopUp: React.FC<EditPopUpProps> = ({
  visible,
  onclose,
  title,
  description,
  id,
  array,
}) => {
  const [value1, onChangeText1] = useState(title);
  const [value2, onChangeText2] = useState(description);

  function ValueChange() {
    const foundObject = array.find(obj => obj.id === id);
    // console.log(id);
    // console.log(foundObject);
    if (foundObject) {
      foundObject.title = value1;
      foundObject.description = value2;
    }
  }
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <View
          style={{
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
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              margin: 10,
            }}>
            Edit Task
          </Text>

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              paddingLeft: 10,
              width: 250,
              margin: 5,
            }}
            onChangeText={text => onChangeText1(text)}
            value={value1}
            placeholder="Task Title"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              paddingLeft: 10,
              width: 250,
              margin: 5,
            }}
            onChangeText={text => onChangeText2(text)}
            value={value2}
            placeholder="Task Description"
          />
          <View style={{flexDirection: 'row'}}>
            <Edit_ButtonComponent
              func={() => {
                //insert function
                ValueChange();
                onclose();
              }}
            />
            <CancelNewButtonComponent
              func={() => {
                onclose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
