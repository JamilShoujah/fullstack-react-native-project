import {Tasks} from './Task';

export interface ArrayMapParam {
  statusType: string;
  array: Tasks[];
  setTaskModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleData: (child: Tasks) => void;
}
