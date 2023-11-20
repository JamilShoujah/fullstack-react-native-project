import {Tasks} from './Task';
export interface PageInterFace {
  ArrayItems: Tasks[];
  SetArrayItems: React.Dispatch<React.SetStateAction<Tasks[]>>;
}
