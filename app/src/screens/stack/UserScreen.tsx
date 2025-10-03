import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../navigator/StackNav';
import { StackScreenProps } from '@react-navigation/stack';
import { Fab } from '../../components/Fab';

interface Props extends StackScreenProps<RootStackParams, "UserScreen">{};

export const UserScreen = ( { navigation, route } :Props ) => {

    const { username, id_user, status } = route.params;

    return(
        <View
            style = { style.root }
        >
            <Text
                style = { style.text }
            >
                UserScreen
            </Text>
            <Text
                style = { style.text }
            >
                ID: { id_user }
            </Text>
            <Text
                style = { style.text }
            >
                Nombre del usuario: { username }
            </Text>
            <Text
                style = { style.text }
            >
                Estado: { ( status ) ? "Activo" : "Inactivo" }
            </Text>
            <Fab
                titulo='Inicio'
                position="button_right"
                action={() => navigation.popToTop() }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: "#863DBA"
    },
    text:{
        fontSize: 50,
        color: "white"
    }
});
