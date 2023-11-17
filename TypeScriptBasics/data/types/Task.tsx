import {StatusTypes} from './statusTypes';

export type Tasks = {
  id: number;
  title: string;
  description: string;
  status: StatusTypes;
};
