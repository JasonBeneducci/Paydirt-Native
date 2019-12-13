import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage} source={require('../images/main-logo.png')} />
                <View style={styles.buttonContainer}>
                    <Text>
                        Home Page
                    </Text>
                    <Button>Go to About Page</Button>
                </View>
            </View>
        );
    }
}