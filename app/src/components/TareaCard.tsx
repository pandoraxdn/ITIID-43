import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TareaResponse } from '../interfaces/tareasInterfaces';

interface Props {
    tarea: TareaResponse;
}

export const TareaCard = ( { tarea } : Props ) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            key={ `${tarea.id_tarea}${tarea.nombre}` }
            onPress={ () => navigation.navigate("FormScreen",{...tarea}) }
        >
            <View
                style={ style.cardContainer }
            >
                <Text
                    style={ style.title }
                >
                    { `Título:\n ${tarea.nombre}` }
                </Text>
                <Text
                    style={ style.title }
                >
                    { `Materia:\n ${tarea.materia} \n` }
                    { `Fecha:\n ${tarea.fecha} \n` }
                    { `Prioridad:\n ${tarea.prioridad} \n` }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 240,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow:"hidden",
        backgroundColor: "olive",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    title:{
        marginTop: 10,
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },
    content:{
        marginTop: 10,
        color: "white",
        fontSize: 8,
        fontWeight: "bold",
        textAlign: "center"
    }
});

