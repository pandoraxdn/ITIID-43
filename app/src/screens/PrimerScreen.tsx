// Importar react de la librería de react
import React from 'react';
import { View, Text } from 'react-native';

// Tipo de dato entero
//let edad:number = 27

// Tipo de dato cadena
// const nombre: string = "Bianca";

// Tipo de dato boolean
// let estado:boolean = true;

const usuario:[number,string,boolean] = [1,"Bianca",false];

export const PrimerScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{
                    fontSize: 30
                }}
            >
                { usuario[0] }
                { usuario[1] }
                { (usuario[2]) ? "Verdadero" : "Falso" }
            </Text>
        </View>
    );
}
