import {useState} from 'react';
import {Tasks} from '../types/Task';
import {DataArray} from '../DataArray';

export function useArrayStates() {
  const [arrayItems, setArrayItems] = useState<Tasks[]>(DataArray);

  return {
    arrayItems,
    setArrayItems,
  };
}
