import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { customContador } from '../hooks/customContador';

export const ContadorScreen = () => {

    const { contador, add, reset, dec } = customContador(10);

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.texto }
            >
                ContadorScreen: { contador }
            </Text>
            <BtnTouch
                titulo='Añadir'
                color='black'
                action={ () => add() }
            />
            <BtnTouch
                titulo='Reiniciar'
                color='gray'
                action={ () => reset() }
            />
            <BtnTouch
                titulo='Reducir'
                color='olive'
                action={ () => dec() }
            />
        </View>
    );
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        fontSize: 50,
        color: "violet"
    }
});

