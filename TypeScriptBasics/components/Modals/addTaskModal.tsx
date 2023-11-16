/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Modal, Text, TextInput, View} from 'react-native';
import {AddNewItemModal} from '../../data/types/AddNewItemModal';
import {CancelNewButtonComponent} from '../Buttons/ModalCancelButton';
import {AddButtonComponent} from '../Buttons/ModalAddButton';
import {InputFieldValues} from '../../data/Functions/InputFieldValues';

export const AddNewTaskPopUp: React.FC<AddNewItemModal> = ({
  visible,
  onclose,
  titleValue,
  changeTitleValue,
  descriptionValue,
  changeDescriptionValue,
  addArrayItems,
}) => {
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
            New Task
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
            onChangeText={text => changeTitleValue(text)}
            value={titleValue}
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
            onChangeText={text => changeDescriptionValue(text)}
            value={descriptionValue}
            placeholder="Task Description"
          />
          <View style={{flexDirection: 'row'}}>
            <AddButtonComponent
              func={() => {
                InputFieldValues(titleValue, descriptionValue, addArrayItems);
                onclose();
                changeTitleValue('');
                changeDescriptionValue('');
              }}
            />
            <CancelNewButtonComponent
              func={() => {
                onclose();
                changeTitleValue('');
                changeDescriptionValue('');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
