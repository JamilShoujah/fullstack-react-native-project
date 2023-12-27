import i18n from '../../shared/i18n/i18n';
import {EReligion} from '../types/enums/religionEnum';

export const RELIGION_ARRAY = [
  {value: EReligion.ATHEISM, title: i18n.get('ATHEISM')},
  {value: EReligion.BUDDISM, title: i18n.get('BUDDHISM')},
  {value: EReligion.CHRISTIANITY, title: i18n.get('CHRISTIANITY')},
  {value: EReligion.HINDUISM, title: i18n.get('HINDUISM')},
  {value: EReligion.ISLAM, title: i18n.get('ISLAM')},
  {value: EReligion.JUDAISM, title: i18n.get('JUDAISM')},
];
