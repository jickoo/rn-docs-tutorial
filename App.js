import React, {Component} from 'react';
import {View} from 'react-native';
import DynamicContext from './src/DynamicContext';
import TogglerIndex from './src/DynamicContext/togglerIndex';
import ConsumingMultipleContext from './src/DynamicContext/consumingMultipleContextIndex';

class App extends Component {
  render() {
    return (
      <View>
        <DynamicContext/>
        <TogglerIndex/>
        <ConsumingMultipleContext/>
      </View>
    );
  }
}

export default App;