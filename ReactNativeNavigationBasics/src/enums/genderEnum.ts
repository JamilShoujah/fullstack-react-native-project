import {useTranslation} from 'react-i18next';

export enum EGender {
  NO = '',
  MALE = 'Male',
  FEMALE = 'Female',
  NONBINARY = 'Non-Binary',
  ATTACKHELICOPTER = 'Attack-Helicopter',
  WALMARTBAG = 'Walmart-Bag',
  ONEOFTHEOTHER200GENDERS = 'One of the 200+ genders',
}

export function TranslateGender(gender: EGender): string {
  const {t} = useTranslation();
  switch (gender) {
    case EGender.MALE:
      return t('male');
    case EGender.FEMALE:
      return t('female');
    case EGender.NONBINARY:
      return t('non-binary');
    case EGender.ATTACKHELICOPTER:
      return t('attack-helicopter');
    case EGender.WALMARTBAG:
      return t('walmart-bag');
    case EGender.ONEOFTHEOTHER200GENDERS:
      return t('200Genders');
    default:
      return '';
  }
}
