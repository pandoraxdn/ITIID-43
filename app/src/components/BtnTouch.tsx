import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props{
    titulo: string;
    color:  string;
    action: () => void;
}

export const BtnTouch = ( { titulo, color, action }:Props ) => {

    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={ () => action() }
        >
            <View
                style={{
                    ...style.btn,
                    backgroundColor: color
                }}
            >
                <Text
                    style={style.texto}
                >
                    { titulo }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    btn: {
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 4,
        height: 60,
        margin: 10,
        justifyContent: "center",
        width: 150,
    },
    texto:{
        fontSize: 40,
        color: "white"
    } 
});


