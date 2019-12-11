import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

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
          <TouchableOpacity style={styles.navComponent} onPress={() => alert("You should be going to make picks.")}><Text style={styles.button}>Make Picks</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navComponent} onPress={() => alert("You should be going to the leaderboards.")}><Text style={styles.button}>Leaderboards</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navComponent} onPress={() => alert("You should be going to the about section")}><Text style={styles.button}>About</Text></TouchableOpacity>
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
  },
  welcome: {
    position: 'absolute',
    top: 80,
    fontFamily: 'Cochin',
    backgroundColor: 'navy',
    fontSize: 60,
    textAlign: 'center',
    margin: 4,
    color: 'red'
  },
  description: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  mainImage: {
    // resizeMode: 'stretch',
    height: 290,
    width: 320,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
    width: '100%',
    marginBottom: 0,
    alignItems: 'stretch',
    backgroundColor: 'red',
  },
  navComponent: {
    borderStyle: 'solid',
    borderColor: 'navy',
    borderWidth: 10,
  },
  button: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    backgroundColor: 'red'
  }
});


