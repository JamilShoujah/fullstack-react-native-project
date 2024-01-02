import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TEt3Theme, withTheme} from '../enhancedRenderer/store/index';

type TFunc = <P extends object>(
  Component: React.ComponentType<P>,
) => React.FunctionComponent<P>;

const compose = (...funcs: TFunc[]) =>
  funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
    arg => arg,
  );

export default compose;

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TEt3Theme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TEt3Theme}>;

export const withLiteObserverAndTheme = (component => {
  return compose(withTheme, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
