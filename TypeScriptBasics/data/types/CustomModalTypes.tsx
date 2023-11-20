export interface CustomModalTypes {
  visible: boolean;
  onclose: () => void;
  titleValue: string;
  descriptionValue: string;
  PromoteButtonName: string;
  DemoteButtonName: string;
  PromoteButtonFunc: () => void;
  DemoteButtonFunc: () => void;
}
