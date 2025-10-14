import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../../navigator/StackNav';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch } from '../../components/BtnTouch';
import { Fab } from '../../components/Fab';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams,"ScreenI">{};

interface User{
    username: string;
    id_user: number;
    status: boolean;
}

export const ScreenI = ( { navigation } : Props ) => {

    const { singIn, logout, authState, changeUsername } = useContext(AuthContext);
    
    const usuario: User = {
        username:   "Chucho Ivan",
        id_user:    25,
        status:     false,
    }

    const usuario2: User = {
        username:   "Irais",
        id_user:    26,
        status:     true,
    }

    return(
        <View
            style={ style.root }
        >
            <Text>
                ScreenI
            </Text>
            <BtnTouch
                titulo={ (authState.isLoggedIn) ? "Cerrar sesión" : "Iniciar sesión" }
                color={ (authState.isLoggedIn) ? "red" : "black" }
                action={ () => (authState.isLoggedIn) ? logout() : singIn() }
            />
            {
                (authState.isLoggedIn) && 
                <BtnTouch
                    titulo="Cambiar usuario"
                    color="blue"
                    action={ () => changeUsername("Edith") }
                />
            }
            <Fab
                titulo='->'
                position="button_right"
                action={ () => navigation.navigate("ScreenII") }
            />
            <BtnTouch
                titulo={usuario.username}
                color='violet'
                action={ () => navigation.navigate("UserScreen",usuario) }
            />
            <BtnTouch
                titulo={usuario2.username}
                color='violet'
                action={ () => navigation.navigate("UserScreen",usuario2) }
            />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }
});

