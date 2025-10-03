import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { customContador } from '../hooks/customContador';

export const ContadorScreen = () => {

    const initialValue: number = 10;

    const { contador, add, reset, dec } = customContador(initialValue);

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.text }
            >
                ContadorScreen: { contador }
            </Text>
            <BtnTouch
                titulo='añadir'
                color='blue'
                action={ () => add() }
            />
            <BtnTouch
                titulo='reiniciar'
                color='gray'
                action={ () => reset() }
            />
            <BtnTouch
                titulo='decrementar'
                color='violet'
                action={ () => dec() }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        color: "violet",
        borderColor: "black",
        borderWidth: 4
    }
});

