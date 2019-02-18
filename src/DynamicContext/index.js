import React, {Component} from 'react';
import {View} from 'react-native';

import {ThemeContext, themes} from './themeContext';
import ThemedButton from './themedButton';

// An intermediate component that uses the ThemedButton

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <View>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onPress={this.toggleTheme.bind(this)}>
            Change Theme
          </ThemedButton>
        </ThemeContext.Provider>
        <View>
          <ThemedButton />
        </View>
      </View>
    );
  }
}

export default App;