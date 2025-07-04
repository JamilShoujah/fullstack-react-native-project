import {round} from 'lodash';
import memoize from 'lodash/memoize';
import {computed} from 'mobx';
import {Dimensions} from 'react-native';

class Theme {
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
    const {unitX, unitY, childX, childY} = this.getAppUnits.get();

    const colorTheme = {
      backgroundColor: '#0F1035',
      primaryColor: '#7FC7D9',
      secondaryColor: '#365486',
      secondaryLight: '#DCF2F1',
      darkText: '#000000',
      lightText: '#ffffff',
      modalBackground: 'rgba(0, 0, 0, 0.9)',
      warningColor: '#CC3300',
    };

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
  return new Theme();
});

export default getTheme;
