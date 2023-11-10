/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {dataArray, Item} from '../components/dataList';
import {PopUp} from '../pages/popup';
import {EditPopUp} from './editPopUp';
import {
  DeleteButtonComponent,
  DoneButtonComponent,
  EditButtonComponent,
  AddNewButtonComponent,
} from '../components/buttons';
function ToDoList(): JSX.Element {
  const [items, setItems] = useState<Item[]>(dataArray);

  const handlePress = (itemId: number) => {
    // console.log(itemId);
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const updateArray = (newItem: Item) => {
    // console.log(itemId);
    setItems(currentItems => [...currentItems, newItem]);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [EditmodalVisible, setEditModalVisible] = useState(false);
  // min hon l shighil
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [idValue, setIdValue] = useState(0);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleEditOpen = () => {
    setEditModalVisible(true);
  };

  const handleEditClose = () => {
    setEditModalVisible(false);
  };
  const ItemsContext = React.createContext(setItems);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'green',
              fontSize: 50,
              padding: 10,
              fontWeight: '900',
            }}>
            To-Do List:
          </Text>
          <View
            style={{
              backgroundColor: 'grey',
              width: '90%',
              borderRadius: 10,
              padding: 5,
            }}>
            {items.map(item => (
              <View
                key={item.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 10,
                  margin: 5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item.title}:
                </Text>
                <Text style={{fontSize: 10}}>{item.description}</Text>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <DoneButtonComponent
                      parameter={item.id}
                      func={handlePress}
                    />
                    <EditButtonComponent
                      func={() => {
                        console.log(item.id);
                        setTitleValue(item.title);
                        setDescriptionValue(item.description);
                        setIdValue(item.id);
                        handleEditOpen();
                      }}
                    />
                    <DeleteButtonComponent
                      parameter={item.id}
                      func={handlePress}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <AddNewButtonComponent func={handleOpen} />
      <ItemsContext.Provider value={setItems}>
        <PopUp
          visible={modalVisible}
          onclose={handleClose}
          arrayUpdate={updateArray}
        />

        <EditPopUp
          visible={EditmodalVisible}
          onclose={handleEditClose}
          arrayUpdate={updateArray}
          title={titleValue}
          description={descriptionValue}
          id={idValue}
          array={items}
        />
      </ItemsContext.Provider>
    </SafeAreaView>
  );
}

export default ToDoList;
