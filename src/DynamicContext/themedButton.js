import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {ThemeContext} from "./themeContext";

class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    console.log(theme);
    return (
      <View >
        <Button {...props} title="click button" color={theme.background}>
        </Button>
      </View>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;