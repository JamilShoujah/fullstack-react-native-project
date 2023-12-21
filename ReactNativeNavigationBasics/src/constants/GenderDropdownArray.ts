import {EGender, TranslateGender} from '../enums/genderEnum';

export const GENDER_ARRAY = [
  {label: TranslateGender(EGender.MALE), value: EGender.MALE},
  {label: TranslateGender(EGender.FEMALE), value: EGender.FEMALE},
  {label: TranslateGender(EGender.NONBINARY), value: EGender.NONBINARY},
  {
    label: TranslateGender(EGender.ATTACKHELICOPTER),
    value: EGender.ATTACKHELICOPTER,
  },
  {label: TranslateGender(EGender.WALMARTBAG), value: EGender.WALMARTBAG},
  {
    label: TranslateGender(EGender.ONEOFTHEOTHER200GENDERS),
    value: EGender.ONEOFTHEOTHER200GENDERS,
  },
];
