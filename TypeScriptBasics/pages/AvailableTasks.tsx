/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import {TopAppBar} from '../Bars/TopBar';
import {DataArrayMap} from '../data/Functions/ArrayMap';
import {AddNewTask} from '../components/Buttons/AddNewTaskButton';
import {AddNewTaskPopUp} from '../components/Modals/addTaskModal';
import {useArrayStates} from '../data/UseStates/ArrayUseState';
import {useDescriptionValue} from '../data/UseStates/DescriptionInputValueUseState';
import {useModalVisibility} from '../data/UseStates/modalUseStates';
import {useTitleValue} from '../data/UseStates/TitleInputValueUseState';
import {TaskModal} from '../components/Modals/TaskModal';
import {useTaskModalVisibility} from '../data/UseStates/TaskModalUseState';
import {Tasks} from '../data/types/Task';
import {useData} from '../data/UseStates/DataUseState';
export const HomePage = () => {
  const {modalVisible, setModalVisibility} = useModalVisibility();
  const {arrayItems, setArrayItems} = useArrayStates();
  const {titleInputValue, setTitleInputValue} = useTitleValue();
  const {descriptionInputValue, setDescriptionInputValue} =
    useDescriptionValue();
  const {taskModalVisible, setTaskModalVisibility} = useTaskModalVisibility();
  const {task, setTask} = useData();
  const handleDataFromChild = (data: Tasks) => {
    const childData: Tasks = {
      id: data.id,
      title: data.title,
      description: data.description,
      status: data.status,
    };
    setTask(childData);
  };

  return (
    <View style={{height: 650}}>
      <TopAppBar title={'Available Tasks'} />
      <ScrollView>
        <DataArrayMap
          statusType={'complete'}
          array={arrayItems}
          setTaskModalVisible={setTaskModalVisibility}
          handleData={handleDataFromChild}
        />
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
      <TaskModal
        visible={taskModalVisible}
        onclose={() => {
          setTaskModalVisibility(false);
        }}
        titleValue={task.title}
        descriptionValue={task.description}
        buttonName={'Start'}
      />
    </View>
  );
};
