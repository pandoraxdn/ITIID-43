import React from "react";
import { View, Text, Button } from "react-native";
import { BtnTouch } from "../components/BtnTouch";

interface Props{
    titulo: string;
    color:  string;
}

const Boton = ( { titulo, color }:Props ) => {
    return (
        <Button
            title={titulo}
            color={color}
        />
    );
}

const alumno: Props = {
    titulo: "Nadia",
    color: "violet"
}

export const MiPrimerComponenteScreen = () => {
    return (
        <View
            style={{
                alignContent: "center",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 60,
                    color: "violet",
                    borderColor: "black",
                    borderWidth: 5,
                    borderRadius: 20
                }}
            >
                Hola
            </Text>
            <Boton
                titulo="Santiago"
                color="blue"
            />
            <Boton
                titulo="Bianca"
                color="brown"
            />
            <Boton
                titulo="Keira"
                color="olive"
            />
            <Boton
                titulo={alumno.titulo}
                color={alumno.color}
            />
            <Boton
                {...alumno}
            />
            <BtnTouch
                titulo={ alumno.titulo }
                color={ alumno.color }
                action={() => console.log(alumno.titulo)}
            />
            <BtnTouch
                titulo={ alumno.titulo }
                color={ alumno.color }
                action={() => console.log(alumno.color)}
            />
        </View>
    );
}
