import {round} from 'lodash';
import memoize from 'lodash/memoize';

import {computed, observable, runInAction} from 'mobx';
import {Dimensions} from 'react-native';
import {appColors} from '../../constants/colorTheme';

class Et3Theme {
  isDarktheme = observable.box(false);
  test = observable.box(true);

  switchTheme() {
    runInAction(() => {
      this.isDarktheme.set(!this.isDarktheme.get());
    });
  }
  getAppUnits = computed(() => {
    const initiaHeight = Dimensions.get('screen').height;
    const initialWidth = Dimensions.get('screen').width;
    const width = initiaHeight > initialWidth ? initialWidth : initiaHeight;
    const height = initiaHeight > initialWidth ? initiaHeight : initialWidth;
    const resolutionHeight = 192;
    const resolutionWidth = 108;
    const oldRation = 192 / 108;
    const unitX = round(width / resolutionWidth, 5);
    const unitY = round(height / resolutionHeight, 5);
    let subRectWidth = width;
    let subRectHeight = width * oldRation;
    if (unitY < unitX) {
      subRectWidth = height / oldRation;
      subRectHeight = height;
    }
    const childX = round(subRectWidth / resolutionWidth, 5);
    const childY = round(subRectHeight / resolutionHeight, 5);
    return {unitX, unitY, childX, childY};
  });

  getThemeData = computed(() => {
    let appTheme = this.isDarktheme.get();
    const {unitX, unitY, childX, childY} = this.getAppUnits.get();

    const lightThemeColors = appColors.LIGHT;
    const DarkThemeColors = appColors.DARK;
    let colorTheme;
    if (appTheme) {
      colorTheme = DarkThemeColors;
    } else {
      colorTheme = lightThemeColors;
    }

    return {
      colors: colorTheme,
      unitX: unitX,
      unitY: unitY,
      childX: childX,
      childY: childY,
      getFontSize: (fontSize: number) => {
        return fontSize * childX;
      },
    };
  });
}

export const getTheme = memoize(() => {
  return new Et3Theme();
});

export default getTheme;
