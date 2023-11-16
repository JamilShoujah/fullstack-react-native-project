/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
// import {BottomAppBar} from '../Bars/BottomBar';
import {TopAppBar} from '../Bars/TopBar';
import {DataArrayMap} from '../data/Functions/ArrayMap';
import {AddNewTask} from '../components/Buttons/AddNewTaskButton';
import {AddNewTaskPopUp} from '../components/Modals/addTaskModal';
import {useArrayStates} from '../data/UseStates/ArrayUseState';
import {useDescriptionValue} from '../data/UseStates/DescriptionInputValueUseState';
import {useModalVisibility} from '../data/UseStates/modalUseStates';
import {useTitleValue} from '../data/UseStates/TitleInputValueUseState';
import {TaskModal} from '../components/Modals/TaskModal';

export const HomePage = () => {
  const {modalVisible, setModalVisibility} = useModalVisibility();
  const {arrayItems, setArrayItems} = useArrayStates();
  const {titleInputValue, setTitleInputValue} = useTitleValue();
  const {descriptionInputValue, setDescriptionInputValue} =
    useDescriptionValue();

  return (
    <View style={{height: 650}}>
      <TopAppBar title={'Available Tasks'} />
      <ScrollView>
        <DataArrayMap statusType={'complete'} array={arrayItems} />
      </ScrollView>
      <AddNewTask
        func={() => {
          setModalVisibility(true);
        }}
      />
      <AddNewTaskPopUp
        visible={modalVisible}
        onclose={() => {
          setModalVisibility(false);
        }}
        titleValue={titleInputValue}
        changeTitleValue={setTitleInputValue}
        descriptionValue={descriptionInputValue}
        changeDescriptionValue={setDescriptionInputValue}
        addArrayItems={setArrayItems}
      />
      {/* <TaskModal
        visible={true}
        onclose={() => {
          // setModalVisibility(false);
          //has to be changed
        }}
        titleValue={'Task Title'}
        // Be sure to change title
        descriptionValue={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates, distinctio eum sed ipsam architecto, delectus corporis obcaecati aliquam assumenda magnam expedita, ipsa commodi hic fugit illum. Voluptas, fuga repudiandae!'
        }
        // Be sure to change description
      /> */}
    </View>
  );
};
