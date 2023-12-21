import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import jp from '../locales/jp.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    ar: {translation: ar},
    jp: {translation: jp},
  },
  compatibilityJSON: 'v3',
  lng: 'ar',
  fallbackLng: 'en',
});

export default i18next;
