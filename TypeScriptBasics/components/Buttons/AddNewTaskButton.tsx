/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import {AddBewTaskButtonInt} from '../../data/types/AddNewTaskButton';
// import {ModalVisibility} from '../../data/Functions/ModalVisibilty';

export const AddNewTask: React.FC<AddBewTaskButtonInt> = ({func}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        func();
      }}
      style={{
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
      }}>
      <Text style={{fontSize: 30, fontWeight: '900', color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
};
