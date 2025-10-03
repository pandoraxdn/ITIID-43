import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { customReducerContador, AuthReducer } from '../hooks/customReducerContador';

export const ContadorReducerScreen = () => {

    const initialState: AuthReducer = {
        count: 10
    }

    const { estado, add, add2, reset, dec, dec2 } = customReducerContador( initialState );

    return(
        <View
            style={ style.root }
        >
            <Text
                style={ style.text }
            >
                ContadorScreen: { estado.count }
            </Text>
            <BtnTouch
                titulo='añadir'
                color='blue'
                action={ () => add() }
            />
            <BtnTouch
                titulo='añadir +2'
                color='blue'
                action={ () => add2() }
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
            <BtnTouch
                titulo='decrementar -2'
                color='violet'
                action={ () => dec2() }
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

