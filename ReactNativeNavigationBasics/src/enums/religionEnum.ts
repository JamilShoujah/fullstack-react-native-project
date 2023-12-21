import {useTranslation} from 'react-i18next';

export enum EReligion {
  NO = '',
  ISLAM = 'Islam',
  CHRISTIANITY = 'Christianity',
  JUDAISM = 'Judaism',
  BUDDISM = 'Buddism',
  HINDUISM = 'Hinduism',
  ATHEISM = 'Atheism',
}

export function TranslateReligion(religion: EReligion): string {
  const {t} = useTranslation();
  switch (religion) {
    case EReligion.ATHEISM:
      return t('atheism');
    case EReligion.BUDDISM:
      return t('buddism');
    case EReligion.CHRISTIANITY:
      return t('non-binary');
    case EReligion.HINDUISM:
      return t('hinduism');
    case EReligion.ISLAM:
      return t('islam');
    case EReligion.JUDAISM:
      return t('judaism');
    default:
      return '';
  }
}
