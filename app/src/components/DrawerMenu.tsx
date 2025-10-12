import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
import { appTheme } from "../themes/appTheme";

export const DrawerMenu = ( {navigation} :DrawerContentComponentProps ) => {

    const assets: string = "./../../assets/";

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
                    source={require( assets + "capi.jpg")}
                />
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: "white",
                            marginTop: 5,
                            fontSize: 32
                        }}
                    >
                        Username: Capibara
                    </Text>
                </View>
                <View
                    style={ appTheme.menuContainer }
                >
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("PokemonNavigator") }
                    >
                        <View
                            style={ appTheme.menuBtn }
                        >
                            <Text
                                style={ appTheme.textBtn }
                            >
                                PokemonNavigator
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("StackNav") }
                    >
                        <View
                            style={ appTheme.menuBtn }
                        >
                            <Text
                                style={ appTheme.textBtn }
                            >
                                Stack Navigator
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("TareaNavigator") }
                    >
                        <View
                            style={ appTheme.menuBtn }
                        >
                            <Text
                                style={ appTheme.textBtn }
                            >
                                Tarea Crud
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("UserNavigator") }
                    >
                        <View
                            style={ appTheme.menuBtn }
                        >
                            <Text
                                style={ appTheme.textBtn }
                            >
                                User Crud
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate("ImagePicker") }
                    >
                        <View
                            style={ appTheme.menuBtn }
                        >
                            <Text
                                style={ appTheme.textBtn }
                            >
                                Image Picker
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
