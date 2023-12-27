import i18n from '../../shared/i18n/i18n';
import {EGender} from '../types/enums/genderEnum';

export const GENDER_ARRAY = [
  {value: EGender.MALE, title: i18n.get('MALE')},
  {value: EGender.FEMALE, title: i18n.get('FEMALE')},
  {value: EGender.NONBINARY, title: i18n.get('NON_BINARY')},
  {value: EGender.ATTACKHELICOPTER, title: i18n.get('ATTACK_HELICOPTER')},
  {value: EGender.WALMARTBAG, title: i18n.get('WALMART_BAG')},
  {
    value: EGender.ONEOFTHEOTHER200GENDERS,
    title: i18n.get('ONE_OF_THE_GENDERS'),
  },
];
