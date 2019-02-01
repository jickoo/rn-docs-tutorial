import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://imgnews.pstatic.net/image/343/2019/02/01/20190201441_20190201161459645.jpg?type=w647'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={this.props.img} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Greeting img={{uri: 'https://imgnews.pstatic.net/image/343/2019/02/01/20190201441_20190201161459645.jpg?type=w647'}} />
        <Greeting img={{uri: 'https://imgnews.pstatic.net/image/011/2019/02/01/0003498930_001_20190201142914885.jpg?type=w647'}} />
      </View>
    );
  }
}
