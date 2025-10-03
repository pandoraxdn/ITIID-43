import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { AuthReducer, customReducerContador } from '../hooks/customReducerContador';

export const ContadorReducerScreen = () => {

    const initialState: AuthReducer = { count: 10 };

    const { estado, add, add2, reset, dec, dec2 } = customReducerContador( initialState );

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.texto }
            >
                ContadorScreen: { estado.count }
            </Text>
            <BtnTouch
                titulo='Añadir'
                color='black'
                action={ () => add() }
            />
            <BtnTouch
                titulo='Añadir +2'
                color='black'
                action={ () => add2() }
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
            <BtnTouch
                titulo='Reducir -2'
                color='olive'
                action={ () => dec2() }
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
