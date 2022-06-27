import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../assets/splash-img-1.png')}
            >
            <View style={styles.loginButton}>
            <Text>Start Your Journey</Text>
            </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'flex-end',
    },
    loginButton: {
        width: '75%',
        height: 70,
        backgroundColor: '#002869',
        borderRadius: 120,
        marginBottom: '40%',


    }
})

export default WelcomeScreen;