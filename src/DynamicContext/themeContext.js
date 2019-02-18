import React, {Component} from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: 'red',
  },
  dark: {
    foreground: '#ffffff',
    background: 'skyblue',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);

export const ThemeTogglerContext = React.createContext({
  // default value
  theme: themes.dark,
  toggleTheme: () => {},
});
