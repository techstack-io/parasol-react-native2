import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
    return (
        <>
        <ImageBackground
            style={styles.background}
            source={require('../assets/hero-img-3.png')}
        />
        <View style={styles.loginButton}>

        </View>
        </>
     
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '50%'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#002869',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 120,
        elevation: 3,
   
    }
})

export default WelcomeScreen;