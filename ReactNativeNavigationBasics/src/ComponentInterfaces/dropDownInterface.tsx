export interface IDropDownMenu {
  dataArray: Array<{label: any; value: any}>;
  dropDownValue: string;
  onValueChange: (text: any) => void;
  type: string;
}
