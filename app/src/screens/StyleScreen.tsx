import React from 'react';
import { View, StyleSheet } from 'react-native';

export const StyleScreen = () => {

    return(
        <View
            style={ style.root }
        >
            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "violet",
                    alignSelf: "flex-start"
                }}
            />
            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "black",
                }}
            />
            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "pink",
                    alignSelf: "flex-end"
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    texto:{
        fontSize: 100,
        color: "violet"
    }
});

