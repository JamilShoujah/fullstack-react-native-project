import {useState} from 'react';

export function useTitleValue() {
  const [titleInputValue, setTitleInputValue] = useState<string>('');
  return {titleInputValue, setTitleInputValue};
}
