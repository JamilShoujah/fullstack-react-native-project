/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Modal, Text, View} from 'react-native';
import {CustomModalTypes} from '../../data/types/CustomModalTypes';
import {CloseModalButton} from '../Buttons/closeButton';
import {CustomModalButton} from '../Buttons/TaskModalActionButton';

export const TaskModal: React.FC<CustomModalTypes> = ({
  visible,
  onclose,
  titleValue,
  descriptionValue,
  PromoteButtonName,
  PromoteButtonFunc,
  DemoteButtonName,
  DemoteButtonFunc,
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
          <CloseModalButton func={onclose} />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: 0,
            }}>
            {titleValue}
          </Text>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              width: 275,
              fontWeight: 'bold',
              fontSize: 12,
              margin: 10,
            }}>
            {descriptionValue}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <CustomModalButton
              func={function (): void {
                onclose();
                DemoteButtonFunc();
              }}
              name={DemoteButtonName}
              color={'red'}
            />
            <CustomModalButton
              func={function (): void {
                onclose();
                PromoteButtonFunc();
              }}
              name={PromoteButtonName}
              color={'green'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
