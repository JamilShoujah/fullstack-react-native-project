import {Tasks} from './Task';

export interface AddNewItemModal {
  visible: boolean;
  onclose: () => void;
  titleValue: string;
  changeTitleValue: React.Dispatch<React.SetStateAction<string>>;
  descriptionValue: string;
  changeDescriptionValue: React.Dispatch<React.SetStateAction<string>>;
  addArrayItems: React.Dispatch<React.SetStateAction<Tasks[]>>;
}
