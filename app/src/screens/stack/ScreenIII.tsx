import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../navigator/StackNav';
import { StackScreenProps } from '@react-navigation/stack';
import { Fab } from '../../components/Fab';

interface Props extends StackScreenProps<RootStackParams, "ScreenII">{};

export const ScreenIII = ( { navigation } :Props ) => {

    return(
        <View
            style = { style.root }
        >
            <Text
                style = { style.text }
            >
                ScreenIII
            </Text>
            <Fab
                titulo='<-'
                position="button_left"
                action={() => navigation.navigate("ScreenII") }
            />
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
