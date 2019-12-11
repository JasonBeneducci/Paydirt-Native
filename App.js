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
        <Image style={styles.mainImage} source={require('./images/main-logo.png')}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navItem} onPress={() => alert("You should be going to make picks.")}><Text style={styles.navItemText}>Make Picks</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => alert("You should be going to the leaderboards.")}><Text style={styles.navItemText}>Leaderboards</Text></TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => alert("You should be going to the about section")}><Text style={styles.navItemText}>About</Text></TouchableOpacity>
        </View>
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
  // welcome: {
  //   position: 'absolute',
  //   top: 80,
  //   fontFamily: 'Cochin',
  //   // backgroundColor: 'rgb(23,57,102)',
  //   borderStyle: 'solid',
  //   borderRadius: 10,
  //   fontSize: 60,
  //   textAlign: 'center',
  //   margin: 4,
  //   color: 'red'
  // },
  description: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  mainImage: {
    position: 'absolute',
    top: 100,
    height: 290,
    width: 320,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    width: '100%',
    // alignItems: 'stretch',
    // backgroundColor: 'red',
  },
  navItem: {
    margin: 7,
    borderStyle: 'solid',
    backgroundColor: 'rgb(23,57,102)',
    borderWidth: 2,
    borderRadius: 5,
  },
  navItemText: {
    margin: 7,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red',
  }
});


