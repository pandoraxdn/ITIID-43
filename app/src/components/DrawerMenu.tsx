import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from './BtnTouch';

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
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("PokemonNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Pokedex
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("TareaNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Crud Tareas
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("StackNav") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Stack Navigator
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("ImagePickerScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Image Picker
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("UserNavigator") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Crud Usuarios
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("ConfigurationScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Confguración
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("GraficosScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Graficos
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("SensorData") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Graficos Sensor
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("QrScreen") }
                    >
                        <View
                            style={appTheme.menuBtn}
                        >
                            <Text
                                style={appTheme.textBtn}
                            >
                                Código QR
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
