/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, View} from 'react-native';
import {DataArrayMap} from '../data/Functions/ArrayMap';
import {useDescriptionValue} from '../data/UseStates/DescriptionInputValueUseState';
import {useTaskModalVisibility} from '../data/UseStates/TaskModalUseState';
import {Tasks} from '../data/types/Task';
import {useData} from '../data/UseStates/DataUseState';
import {StatusTypes} from '../data/types/statusTypes';
import {NonAvailableTaskModal} from '../components/Modals/NonAvailableTaskModal';
import {PageInterFace} from '../data/types/mainPagesDisplay';
export const CompleteTasksPage: React.FC<PageInterFace> = ({
  ArrayItems,
  SetArrayItems,
}) => {
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
          statusType={StatusTypes.Complete}
          array={ArrayItems}
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
          const updatedArray = ArrayItems.map(item => {
            if (item.id === task.id) {
              return {...item, status: StatusTypes.PendingApproval};
            }
            return item;
          });
          SetArrayItems(updatedArray);
        }}
        DemoteButtonFunc={function (): void {
          const updatedArray = ArrayItems.map(item => {
            if (item.id === task.id) {
              return {...item, status: StatusTypes.Available};
            }
            return item;
          });
          SetArrayItems(updatedArray);
        }}
      />
    </View>
  );
};
