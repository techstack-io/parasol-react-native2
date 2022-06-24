import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/hero-img-3.png')}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

export default WelcomeScreen;