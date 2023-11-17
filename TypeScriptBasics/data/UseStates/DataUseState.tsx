import {useState} from 'react';
import {StatusTypes} from '../types/statusTypes';
import {Tasks} from '../types/Task';

export function useData() {
  const [task, setTask] = useState<Tasks>({
    id: 0,
    title: '',
    description: '',
    status: StatusTypes.Available,
  });

  return {task, setTask};
}
