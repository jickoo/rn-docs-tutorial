import React from 'react';
import {Button} from 'react-native';
import {ThemeTogglerContext} from './themeContext';

function ThemeTogglerButton() {
  return (
    <ThemeTogglerContext.Consumer>
      {({theme, toggleTheme}) => (
        <Button
          onPress={toggleTheme}
          color={theme.background}
          title="toggler button"/>
      )}
    </ThemeTogglerContext.Consumer>
  );
}

export default ThemeTogglerButton;