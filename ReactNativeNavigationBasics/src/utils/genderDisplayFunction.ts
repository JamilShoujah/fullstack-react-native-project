import {EGender} from '../data/types/enums/genderEnum';
import i18n from '../shared/i18n/i18n';

export function genderDisplay(gender: string) {
  let value: string;
  switch (gender) {
    case EGender.ATTACKHELICOPTER:
      value = i18n.get('ATTACK_HELICOPTER');
      break;
    case EGender.FEMALE:
      value = i18n.get('FEMALE');
      break;
    case EGender.MALE:
      value = i18n.get('MALE');
      break;
    case EGender.NONBINARY:
      value = i18n.get('NON_BINARY');
      break;
    case EGender.ONEOFTHEOTHER200GENDERS:
      value = i18n.get('ONE_OF_THE_GENDERS');
      break;
    case EGender.WALMARTBAG:
      value = i18n.get('WALMART_BAG');
      break;
    default:
      value = '';
  }
  return value;
}
