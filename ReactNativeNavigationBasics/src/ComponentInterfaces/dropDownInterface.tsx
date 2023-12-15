import { EGender } from "../enums/genderEnum";
import { EReligion } from "../enums/religionEnum";

export interface IDropDownMenu{
    dataArray: Array<{ value: any }>;
    dropDownValue: string,
    onValueChange: (text: any) => void;
    type: string;
}