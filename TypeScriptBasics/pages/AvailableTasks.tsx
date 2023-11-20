/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import {DataArrayMap} from '../data/Functions/ArrayMap';
import {AddNewTask} from '../components/Buttons/AddNewTaskButton';
import {AddNewTaskPopUp} from '../components/Modals/addTaskModal';
// import {useArrayStates} from '../data/UseStates/ArrayUseState';
import {useDescriptionValue} from '../data/UseStates/DescriptionInputValueUseState';
import {useModalVisibility} from '../data/UseStates/modalUseStates';
import {useTitleValue} from '../data/UseStates/TitleInputValueUseState';
import {TaskModal} from '../components/Modals/TaskModal';
import {useTaskModalVisibility} from '../data/UseStates/TaskModalUseState';
import {Tasks} from '../data/types/Task';
import {useData} from '../data/UseStates/DataUseState';
import {StatusTypes} from '../data/types/statusTypes';
import {PageInterFace} from '../data/types/mainPagesDisplay';
export const AvailableTasksPage: React.FC<PageInterFace> = ({
  ArrayItems,
  SetArrayItems,
}) => {
  const {modalVisible, setModalVisibility} = useModalVisibility();
  // const {arrayItems, setArrayItems} = useArrayStates();
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
    <View>
      <ScrollView>
        <DataArrayMap
          statusType={StatusTypes.Available}
          array={ArrayItems}
          setTaskModalVisible={setTaskModalVisibility}
          handleData={handleDataFromChild}
        />
      </ScrollView>
      <AddNewTask
        func={() => {
          setModalVisibility(true);
          // console.log(ArrayItems);
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
        addArrayItems={SetArrayItems}
      />
      <TaskModal
        visible={taskModalVisible}
        onclose={() => {
          setTaskModalVisibility(false);
        }}
        titleValue={task.title}
        descriptionValue={task.description}
        buttonName={'Start'}
        deleteFunc={() => {
          const updatedArray = ArrayItems.filter(item => item.id !== task.id);
          SetArrayItems(updatedArray);
        }}
        startFunc={() => {
          const updatedArray = ArrayItems.map(item => {
            if (item.id === task.id) {
              return {...item, status: StatusTypes.InProgress};
            }
            return item;
          });
          SetArrayItems(updatedArray);
        }}
      />
    </View>
  );
};
