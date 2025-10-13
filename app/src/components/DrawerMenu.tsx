import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../themes/appTheme';

export const DrawerMenu = ( { navigation }:DrawerContentComponentProps ) => {

    const assets: string = "./../../assets";

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
                    source={ require(assets + "/capi.jpg") }
                />
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            marginTop: 10
                        }}
                    >
                        Username: Capibara
                    </Text>
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
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
