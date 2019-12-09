import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';

// const description = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Paydirt Picks</Text>
        <Image style={styles.mainImage} source={require('./images/main-logo.png')}/>
        <Text style={styles.description}>NFL Pickem Application</Text>
        {/* <Text style={styles.description}>{description}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    // margin: 10,
    color: 'red'
  },
  description: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  mainImage: {
    backgroundColor: 'white',
    borderRadius: 10
  }
});
