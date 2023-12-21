/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {IDropDownMenu} from '../ComponentInterfaces/dropDownInterface';

const DropdownComponent: React.FC<IDropDownMenu> = observer(
  ({dataArray, dropDownValue, onValueChange, type}) => {
    return (
      <Dropdown
        style={{
          width: '100%',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginVertical: 5,
        }}
        placeholderStyle={{color: 'silver', fontSize: 14}}
        placeholder={type}
        data={dataArray}
        labelField="label"
        valueField="value"
        value={dropDownValue}
        onChange={item => {
          onValueChange(item.value);
        }}
      />
    );
  },
);

export default DropdownComponent;
