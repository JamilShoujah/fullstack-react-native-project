export interface IDropDownMenu {
  dataArray: Array<{value: any}>;
  dropDownValue: string;
  onValueChange: (text: any) => void;
  type: string;
}
