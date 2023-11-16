import {useState} from 'react';

export function useDescriptionValue() {
  const [descriptionInputValue, setDescriptionInputValue] =
    useState<string>('');
  return {descriptionInputValue, setDescriptionInputValue};
}
