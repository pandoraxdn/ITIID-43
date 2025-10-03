import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export const PhoneScreen = () => {

    const { width, height } = useWindowDimensions();

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.texto }
            >
                Alto: {height}
            </Text>

            <View
                style={{
                    height: height * 0.3,
                    width: 120,
                    backgroundColor: "pink"
                }}
            />

            <Text
                style={ style.texto }
            >
                Ancho: {width}
            </Text>

            <View
                style={{
                    height: 120,
                    width: width * 0.7,
                    backgroundColor: "pink"
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        textAlign: "center",
        fontSize: 60,
        color: "pink"
    }
});

