import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#002869',
        borderRadius: 120,
        width: '50%',
        flexDirection:  'row',
        justifyContent: 'center', 
        alignItems: 'flex-end',
        // marginBottom: '40%',
    },
    text: {
        color: '#fff'
    }
});

export default AppButton;
