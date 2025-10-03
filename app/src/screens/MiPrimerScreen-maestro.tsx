import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props{
    nombre: string;
    color: string;
    action: () => void;
}

const MiBoton = ( { nombre, color, action }:Props ) => {
    return (
        <TouchableOpacity
            onPress={ () => action() }
        >
            <View
                style={{
                    backgroundColor: color,
                    width: 120,
                    height: 40,
                    justifyContent: "center",
                    borderRadius: 100,
                    marginTop: 5
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 30,
                        textAlign: "center"
                    }}
                >
                    {nombre}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const nombre = {
    nombre: "Juana",
    color: "red"
};

const nombre2 = {
    nombre: "Azul",
    color: "black",
};

export const MiPrimerScreen = () => {
    return(
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            <MiBoton
                nombre={nombre.nombre}
                color={nombre.color}
                action={ () => console.log(nombre.nombre) }
            />
            <MiBoton
                nombre={nombre2.nombre}
                color={nombre2.color}
                action={ () => console.log(nombre2.nombre) }
            />
        </View>
    );
}
