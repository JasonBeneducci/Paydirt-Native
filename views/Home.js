import React from 'react'
import {StyleSheet, Text, View, Image } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    homeText: {
        color: 'red',
        fontSize: 60,
        textAlign: 'center'
    }
})
export default Home