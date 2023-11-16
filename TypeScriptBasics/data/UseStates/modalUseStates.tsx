import {useState} from 'react';

export function useModalVisibility(initialVisibility = false) {
  const [modalVisible, setModalVisibility] = useState(initialVisibility);
  return {modalVisible, setModalVisibility};
}
