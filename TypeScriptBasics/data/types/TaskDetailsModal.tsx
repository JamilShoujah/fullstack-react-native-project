export interface TaskDetailsModal {
  visible: boolean;
  onclose: () => void;
  titleValue: string;
  descriptionValue: string;
  buttonName: string;
  deleteFunc: () => void;
  startFunc: () => void;
}
