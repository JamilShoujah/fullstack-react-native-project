import {observable, runInAction} from 'mobx';
import memoize from 'lodash/memoize';

class LanguageModel {
  isRighttoLeft = observable.box(false);

  setIsRighttoLeft(newValue: boolean) {
    runInAction(() => {
      this.isRighttoLeft.set(newValue);
    });
  }
}
export const getLanguageStore = memoize(
  () => {
    const languageStore = new LanguageModel();
    return languageStore;
  },
  () => 1,
);

export default {getLanguageStore};
