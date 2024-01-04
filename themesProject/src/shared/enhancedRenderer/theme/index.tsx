import * as React from 'react';
import {getTheme} from './getTheme';

const theme = getTheme().getThemeData.get();
const myContext = React.createContext(theme);

export type TEt3Theme = typeof theme;
export const withTheme = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const ComponentWithTheme: React.ComponentType<P> = props => {
    return (
      <myContext.Consumer>
        {theme => {
          const propsWithTheme = {
            ...props,
            theme,
          };
          return React.createElement(Component, propsWithTheme);
        }}
      </myContext.Consumer>
    );
  };
  return ComponentWithTheme;
};

export const ThemeProvider = (props: {
  children: any;
  themeValue: TEt3Theme;
}) => {
  const {children, themeValue} = props;
  return <myContext.Provider value={themeValue}>{children}</myContext.Provider>;
};
