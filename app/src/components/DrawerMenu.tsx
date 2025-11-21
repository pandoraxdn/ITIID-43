import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from './BtnTouch';

interface Props{
    title: string;
    navigate: () => void;
}

const BtnDrawer = ( { title, navigate }: Props ) => {
    return(
        <TouchableOpacity
            onPress={ navigate }
        >
            <View
                style={appTheme.menuBtn}
            >
                <Text
                    style={appTheme.textBtn}
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export const DrawerMenu = ( { navigation }:DrawerContentComponentProps ) => {

    const assets: string = "./../../assets";

    const { authState, logout } = useContext( AuthContext );

    return(
        <DrawerContentScrollView>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    style={appTheme.avatar}
                    source= { (!authState.isLoggedIn && authState.favoriteImage != "") ? require(assets+"/capi.jpg") : { uri: `data:image/jpeg;base64,${authState.favoriteImage}` } }
                />
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            marginTop: 10,
                            color: "white"
                        }}
                    >
                        Username: { (authState.isLoggedIn) ? authState.username : "Capibara" }
                    </Text>
                </View>
                <View>
                    <BtnTouch
                        titulo='Cerrar sesión'
                        action={ () => logout() }
                        color='gray'
                    />
                </View>
                <View
                    style={appTheme.menuContainer}
                >
                    <BtnDrawer
                        title='Pokedex'
                        navigate={ () => navigation.navigate("PokemonNavigator") }
                    />
                    <BtnDrawer
                        title='Crud Tareas'
                        navigate={ () => navigation.navigate("TareaNavigator") }
                    />
                    <BtnDrawer
                        title='Stack Navigator'
                        navigate={ () => navigation.navigate("StackNav") }
                    />
                    <BtnDrawer
                        title='Image Picker'
                        navigate={ () => navigation.navigate("ImagePickerScreen") }
                    />
                    <BtnDrawer
                        title='Crud Usuarios'
                        navigate={ () => navigation.navigate("UserNavigator") }
                    />
                    <BtnDrawer
                        title='Confguración'
                        navigate={ () => navigation.navigate("ConfigurationScreen") }
                    />
                    <BtnDrawer
                        title='Graficos'
                        navigate={ () => navigation.navigate("GraficosScreen") }
                    />
                    <BtnDrawer
                        title='Sensor'
                        navigate={ () => navigation.navigate("SensorData") }
                    />
                    <BtnDrawer
                        title='QR'
                        navigate={ () => navigation.navigate("QrScreen") }
                    />
                    <BtnDrawer
                        title='Ubicación'
                        navigate={ () => navigation.navigate("LocationScreen") }
                    />
                    <BtnDrawer
                        title='Escaner QR'
                        navigate={ () => navigation.navigate("QrScannerScreen") }
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}
