import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

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
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => alert("You tapped the first button!")} title="Press Me!"></Button>
          <Button style={styles.button} onPress={() => alert("You tapped the second button!")} title="Press Me!"></Button>
          <Button style={styles.button} onPress={() => alert("You tapped the third button!")} title="Press Me!"></Button>
        </View>
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
    margin: 4,
    color: 'red'
  },
  // description: {
  //   textAlign: 'center',
  //   color: 'white',
  //   marginBottom: 5,
  // },
  mainImage: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 0,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  button: {
    height: 20,
    width: 20
  }
});


