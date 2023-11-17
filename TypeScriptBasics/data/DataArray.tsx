import {Tasks} from './types/Task';
import {StatusTypes} from './types/statusTypes';
export const DataArray: Tasks[] = [
  {
    id: 1,
    title: 'Available',
    description: 'Available',
    status: StatusTypes.Available,
  },
  {
    id: 2,
    title: 'InProgress',
    description: 'InProgress',
    status: StatusTypes.InProgress,
  },
  {
    id: 3,
    title: 'PendingApproval',
    description: 'PendingApproval',
    status: StatusTypes.PendingApproval,
  },
  {
    id: 4,
    title: 'Complete',
    description: 'Complete',
    status: StatusTypes.Complete,
  },
  {
    id: 6,
    title: 'AAAAUUUUUUUGGGGGGGGGHHHHHHHHH',
    description: ':)',
    status: StatusTypes.Available,
  },
];
