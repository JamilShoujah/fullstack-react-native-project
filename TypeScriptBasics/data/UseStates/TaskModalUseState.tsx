import {useState} from 'react';

export function useTaskModalVisibility(initialVisibility = false) {
  const [taskModalVisible, setTaskModalVisibility] =
    useState(initialVisibility);
  return {taskModalVisible, setTaskModalVisibility};
}
