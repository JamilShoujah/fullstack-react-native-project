import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';

class ThemeModel {
  isDarktheme = observable.box(false);

  switchTheme() {
    runInAction(() => {
      this.isDarktheme.set(!this.isDarktheme.get());
    });
  }
}

const getThemeStore = memoize(() => {
  const themeStore = new ThemeModel();
  return themeStore;
});

export default getThemeStore;
