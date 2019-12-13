import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base'

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage} source={require('../images/main-logo.png')} />
                <View style={styles.buttonContainer}>
                    <Text>
                        About Page
                    </Text>
                    <Button>Go to Home Page</Button>
                </View>
            </View>
        );
    }
}