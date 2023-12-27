import {EReligion} from '../data/types/enums/religionEnum';
import i18n from '../shared/i18n/i18n';

export function religionDisplay(religion: string) {
  let value: string;
  switch (religion) {
    case EReligion.ATHEISM:
      value = i18n.get('ATHEISM');
      break;
    case EReligion.BUDDISM:
      value = i18n.get('BUDDISM');
      break;
    case EReligion.CHRISTIANITY:
      value = i18n.get('CHRISTIANITY');
      break;
    case EReligion.HINDUISM:
      value = i18n.get('HINDUISM');
      break;
    case EReligion.ISLAM:
      value = i18n.get('ISLAM');
      break;
    case EReligion.JUDAISM:
      value = i18n.get('JUDAISM');
      break;
    default:
      value = '';
  }
  return value;
}
