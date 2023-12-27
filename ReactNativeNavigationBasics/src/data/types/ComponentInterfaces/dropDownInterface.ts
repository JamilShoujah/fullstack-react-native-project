export interface IDropDownMenu {
  dataArray: Array<{value: any; title: string}>;
  dropDownValue: string;
  onValueChange: (text: any) => void;
  type: string;
}
