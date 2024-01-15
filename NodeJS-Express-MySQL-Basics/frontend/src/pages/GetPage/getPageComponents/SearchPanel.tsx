/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {View} from 'react-native';
import {MiniTextInputField} from '../../../shared/components/inputs/MiniTextInput';
import {IStudentSearch} from '../../../shared/data/interfaces/student-search-interface';
import {SearchButton} from '../../../shared/components/buttons/SearchButtonComponent';

export const SearchPanel: React.FC<IStudentSearch> = ({
  placeholder,
  value,
  onValueChange,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <MiniTextInputField
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
      />
      <SearchButton onPress={onPress} />
    </View>
  );
};
