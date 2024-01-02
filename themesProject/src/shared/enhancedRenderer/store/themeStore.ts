import memoize from 'lodash/memoize';

import {computed, observable, runInAction} from 'mobx';
import {appColors} from '../../constants/colorTheme';

class Et3Theme {
  isDarktheme = observable.box(false);
  test = observable.box(true);

  switchTheme() {
    runInAction(() => {
      this.isDarktheme.set(!this.isDarktheme.get());
    });
  }

  getThemeData = computed(() => {
    const appTheme = this.isDarktheme.get();
    const lightColors = appColors.LIGHT;
    const darkColors = appColors.DARK;

    if (appTheme) {
      return {...darkColors};
    } else {
      return {...lightColors};
    }
  });
}

export const getTheme = memoize(() => {
  return new Et3Theme();
});

export default getTheme;
