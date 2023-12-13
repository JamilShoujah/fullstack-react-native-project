import { observer } from 'mobx-react';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import { IDropDownMenu } from '../Data/ComponentInterfaces/dropDownInterface';

const DropdownComponent: React.FC<IDropDownMenu>= observer(({dataArray,
    dropDownValue,
    onValueChange}) => {
  return (
    <Dropdown
      style={{
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
      }}
      data={dataArray}
      labelField="value"
      valueField="value"
      value={dropDownValue}
      onChange={item => {
        onValueChange(item.value);
      }}
    />
  );
});

export default DropdownComponent;
