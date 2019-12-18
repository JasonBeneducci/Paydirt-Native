import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage} source={require('./images/main-logo.png')} />
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
        fontFamily: "Copperplate",
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgb(178,37,29)',
    }
});