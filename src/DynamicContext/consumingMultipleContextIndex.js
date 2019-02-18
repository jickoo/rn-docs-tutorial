import React, {Component} from 'react';
import {View, Button} from 'react-native';

// Theme context, default to light theme
const ThemeContext = React.createContext('red');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

class ConsumingMultipleContext extends Component {
  render() {
    // const {signedInUser, theme} = this.props;
    const signedInUser = {name: 'Jickoo'};
    let theme = 'skyblue';

    function Content() {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <UserContext.Consumer>
              {user => (
                <Button title={user.name}
                        onPress={() => {
                          console.log(theme);
                        }} color={theme}/>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
      );
    }
    return (
      <View>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <View>
              <Content />
            </View>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </View>
    );
  }

}
export default ConsumingMultipleContext;