import {StatusTypes} from '../types/statusTypes';
import {Tasks} from '../types/Task';
export function InputFieldValues(
  titleValue: string,
  descriptionValue: string,
  addArrayItems: React.Dispatch<React.SetStateAction<Tasks[]>>,
) {
  const newItem: Tasks = {
    id: Date.now(),
    title: titleValue,
    description: descriptionValue,
    // status: StatusTypes.Available,
    status: StatusTypes.Complete,
  };

  addArrayItems(currentItems => [...currentItems, newItem]);
}
