/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text, View} from 'react-native';

export interface ParamFunctionality {
  parameter: number;
  func: (id: number) => void;
}

export interface NoParamFunctionality {
  func: () => void;
}

export const DeleteButtonComponent: React.FC<ParamFunctionality> = ({
  func,
  parameter,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'red',
      width: 60,
      borderRadius: 10,
      padding: 5,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={() => func(parameter)}>
    <Text style={{color: 'white', fontSize: 10, textAlign: 'center'}}>
      Cancel
    </Text>
  </TouchableOpacity>
);

export const DoneButtonComponent: React.FC<ParamFunctionality> = ({
  func,
  parameter,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'green',
      width: 60,
      borderRadius: 10,
      padding: 5,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={() => {
      func(parameter);
    }}>
    <Text style={{color: 'white', fontSize: 10, textAlign: 'center'}}>
      Done
    </Text>
  </TouchableOpacity>
);

export const EditButtonComponent: React.FC<NoParamFunctionality> = ({func}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'orange',
      width: 60,
      borderRadius: 10,
      padding: 5,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text
      style={{
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
      }}>
      Edit
    </Text>
  </TouchableOpacity>
);

export const AddNewButtonComponent: React.FC<NoParamFunctionality> = ({
  func,
}) => (
  <View
    style={{
      position: 'absolute',
      top: 595,
    }}>
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        borderRadius: 30,
        width: 60,
        margin: 5,
        alignContent: 'center',
      }}
      onPress={func}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: '500',
          color: 'white',
          textAlign: 'center',
        }}>
        +
      </Text>
    </TouchableOpacity>
  </View>
);

export const AddButtonComponent: React.FC<NoParamFunctionality> = ({func}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 10,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Add</Text>
  </TouchableOpacity>
);

export const Edit_ButtonComponent: React.FC<NoParamFunctionality> = ({
  func,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'green',
      borderRadius: 10,
      padding: 10,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
      Edit
    </Text>
  </TouchableOpacity>
);

export const CancelNewButtonComponent: React.FC<NoParamFunctionality> = ({
  func,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 10,
      margin: 5,
      alignContent: 'center',
    }}
    onPress={func}>
    <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
      Cancel
    </Text>
  </TouchableOpacity>
);
