import {IObservableValue} from 'mobx';
import {TLanguageEnum} from '../enums/languageEnum';

type TLanguageCode = 'EN' | 'AR' | 'JP';

type TTranslations = {
  [key in TLanguageCode]: string;
};

type MessageTranslations = {
  [key: string]: TTranslations;
};

export type TLanguage = TLanguageEnum | 'LANG_NOT_SET';

export type TI18n = {
  language: IObservableValue<TLanguage>;
  LG: MessageTranslations;
  setLanguage(language: TLanguage): void;
  get(message: string): string;
};
