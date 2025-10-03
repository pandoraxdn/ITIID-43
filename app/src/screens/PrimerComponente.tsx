import React from "react";
import { View, Text, Button } from "react-native";
import { BtnTouch } from "../components/BtnTouch";

interface Props{
    titulo: string;
    colorB: string;
}

const TouchBoton = ( { titulo, colorB }:Props ) => {
    return ( 
        <Button
            title={titulo}
            color={colorB}
        /> 
    );
}

const alumno: Props = {
    titulo: "Rita Karla Rubi Botello",
    colorB: "Azúl"
}

export const PrimerComponente = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                }}
            >
                PrimerComponente
            </Text>
            <TouchBoton
                titulo="Chupis"
                colorB="black"
            />
            <TouchBoton
                titulo="Ivan A"
                colorB="violet"
            />
            <TouchBoton
                {...alumno}
            />
            <BtnTouch
                titulo={ alumno.titulo }
                color="blue"
                action={ () => console.log("Hola " + alumno.titulo) }
            />
            <BtnTouch
                titulo={ alumno.titulo }
                color="red"
                action={ () => console.log("Hola " + alumno.titulo) }
            />
        </View>
    );
}
