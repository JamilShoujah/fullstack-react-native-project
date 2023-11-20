/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import {DataArrayMap} from '../data/Functions/ArrayMap';
import {useArrayStates} from '../data/UseStates/ArrayUseState';
import {useDescriptionValue} from '../data/UseStates/DescriptionInputValueUseState';
// import {TaskModal} from '../components/Modals/TaskModal';
import {useTaskModalVisibility} from '../data/UseStates/TaskModalUseState';
import {Tasks} from '../data/types/Task';
import {useData} from '../data/UseStates/DataUseState';
import {StatusTypes} from '../data/types/statusTypes';
import {NonAvailableTaskModal} from '../components/Modals/NonAvailableTaskModal';
export const InProgressTasksPage = () => {
  const {arrayItems, setArrayItems} = useArrayStates();
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
          statusType={StatusTypes.InProgress}
          array={arrayItems}
          setTaskModalVisible={setTaskModalVisibility}
          handleData={handleDataFromChild}
        />
      </ScrollView>
      <NonAvailableTaskModal
        visible={taskModalVisible}
        onclose={() => {
          setTaskModalVisibility(false);
        }}
        titleValue={task.title}
        descriptionValue={task.description}
        PromoteButtonName={'Complete'}
        DemoteButtonName={'Go Back'}
        PromoteButtonFunc={() => {
          const updatedArray = arrayItems.map(item => {
            if (item.id === task.id) {
              return {...item, status: StatusTypes.PendingApproval};
            }
            return item;
          });
          setArrayItems(updatedArray);
        }}
        DemoteButtonFunc={function (): void {
          const updatedArray = arrayItems.map(item => {
            if (item.id === task.id) {
              return {...item, status: StatusTypes.Available};
            }
            return item;
          });
          setArrayItems(updatedArray);
        }}
      />
    </View>
  );
};
