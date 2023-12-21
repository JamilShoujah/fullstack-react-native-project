import {EReligion, TranslateReligion} from '../enums/religionEnum';

export const RELIGION_ARRAY = [
  {label: TranslateReligion(EReligion.ATHEISM), value: EReligion.ATHEISM},
  {label: TranslateReligion(EReligion.BUDDISM), value: EReligion.BUDDISM},
  {
    label: TranslateReligion(EReligion.CHRISTIANITY),
    value: EReligion.CHRISTIANITY,
  },
  {label: TranslateReligion(EReligion.HINDUISM), value: EReligion.HINDUISM},
  {label: TranslateReligion(EReligion.ISLAM), value: EReligion.ISLAM},
  {label: TranslateReligion(EReligion.JUDAISM), value: EReligion.JUDAISM},
];
