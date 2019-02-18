import React, {Component} from 'react';
import {View} from 'react-native';
import {ThemeTogglerContext, themes} from "./themeContext";
import ThemeTogglerButton from './themeTogglerButton';

class TogglerIndex extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <View>
        <ThemeTogglerContext.Provider value={this.state}>
          <View>
            <ThemeTogglerButton />
          </View>
        </ThemeTogglerContext.Provider>
        <View>
          <ThemeTogglerButton />
        </View>
      </View>
    );
  }
}

export default TogglerIndex;