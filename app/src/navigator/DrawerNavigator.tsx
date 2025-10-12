import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { StackNav } from "./StackNav";
import { TareaNavigator } from "./TareaNavigator";
import { PokemonNavigator } from "./PokemonNavigator";
import { DrawerMenu } from "../components/DrawerMenu";
import { ImagePicker } from "../screens/ImagePicker";
import { UserNavigator } from "./UserNavigator";

export type RootDrawerParams = {
    StackNav: undefined;
    PokemonNavigator: undefined;
    TareaNavigator: undefined;
    UserNavigator: undefined;
    ImagePicker:    undefined;
}

const Navigator = () => {

    const Drawer = createDrawerNavigator<RootDrawerParams>();

    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator
            initialRouteName="StackNav"
            screenOptions={{
                //headerShown: false,
                drawerType: width >= 768 ? "permanent" : "front",
                drawerPosition: "right",
                //overlayColor: "black",
                drawerStyle: {
                    backgroundColor: "rgba(238,130,238,0.8)",
                    width: width * 0.7
                }
            }}
            drawerContent={ (props) => <DrawerMenu {...props}/> }
        >
            <Drawer.Screen
               name="StackNav" 
                component={StackNav}
            />
            <Drawer.Screen
               name="PokemonNavigator" 
                component={PokemonNavigator}
            />
            <Drawer.Screen
               name="TareaNavigator" 
                component={TareaNavigator}
            />
            <Drawer.Screen
               name="UserNavigator" 
                component={UserNavigator}
            />
            <Drawer.Screen
               name="ImagePicker" 
                component={ImagePicker}
            />
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    return(
        <Navigator/>
    );
}
