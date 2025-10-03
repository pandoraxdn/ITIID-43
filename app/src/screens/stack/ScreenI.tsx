import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RootStackParams } from '../../navigator/StackNav';
import { StackScreenProps } from '@react-navigation/stack';
import { Fab } from '../../components/Fab';
import { BtnTouch } from '../../components/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"ScreenI">{};

interface User{
    id_user:    number;
    username:   string;
    status:     boolean;
}

export const ScreenI = ( { navigation } : Props ) => {

    const al1:User = {
        username:   "Jose",
        id_user:    10,
        status:     true,
    }

    const al2:User = {
        username:   "Raul",
        id_user:    11,
        status:     true,
    }

    const al3:User = {
        username:   "Edith",
        id_user:    12,
        status:     false,
    }

    return(
        <View
            style = { style.root }
        >
            <Text
                style = { style.text }
            >
                ScreenII
            </Text>
            <BtnTouch
                titulo={ al1.username }
                color='blue'
                action={ () => navigation.navigate("UserScreen",al1) }
            />
            <BtnTouch
                titulo={ al2.username }
                color='red'
                action={ () => navigation.navigate("UserScreen",al2) }
            />
            <BtnTouch
                titulo={ al3.username }
                color='olive'
                action={ () => navigation.navigate("UserScreen",al3) }
            />
            <Fab
                titulo='->'
                position="button_right"
                action={ () => navigation.navigate("ScreenII") }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: "#863DBA",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    text:{
        fontSize: 50,
        color: "white"
    }
});

