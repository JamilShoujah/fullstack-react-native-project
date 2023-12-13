import { EGender } from "../enums/genderEnum";
import { EReligion } from "../enums/religionEnum";

export interface IUserInterface {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: EGender;
    religion: EReligion; 
};