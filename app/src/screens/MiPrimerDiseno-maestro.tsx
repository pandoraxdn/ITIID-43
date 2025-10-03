import React from 'react';
import { View, Text } from 'react-native';

export const MiPrimerDiseno = () => {

    return(
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}
        >
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "pink",
                    alignSelf: "flex-start",
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: "gray"
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "red",
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: "gray"
                }}
            />
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "blue",
                    alignSelf: "flex-end",
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: "gray"
                }}
            />
        </View>
    )
}
