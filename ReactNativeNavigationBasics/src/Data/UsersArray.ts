import {EGender} from '../enums/genderEnum';
import {EReligion} from '../enums/religionEnum';
import {IUserInterface} from '../Interfaces/userInterface';

export const usersArray: IUserInterface[] = [
  {
    id: 1,
    email: 'deeznutz@gmail.com',
    password: 'DeezNutz',
    firstName: 'Jamil',
    lastName: 'Shoujah',
    age: 69,
    gender: EGender.WALMARTBAG,
    religion: EReligion.ISLAM,
  },
  {
    id: 2,
    email: 'adolf@burndemjews.com',
    password: 'BurnEmAll',
    firstName: 'Adolf',
    lastName: 'Hitler',
    age: 420,
    gender: EGender.ATTACKHELICOPTER,
    religion: EReligion.CHRISTIANITY,
  },
];
