export interface TaskDetailsModal {
  visible: boolean;
  onclose: () => void;
  titleValue: string;
  descriptionValue: string;
  buttonName: string;
  delete: () => void;
}
