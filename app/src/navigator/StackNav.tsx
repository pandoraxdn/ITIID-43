import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenI } from "../screens/stack/ScreenI";
import { ScreenII } from "../screens/stack/ScreenII";
import { ScreenIII } from "../screens/stack/ScreenIII";
import { UserScreen } from "../screens/stack/UserScreen";

export type RootStackParams = {
    ScreenI:    undefined;
    ScreenII:   undefined;
    ScreenIII:  undefined;
    UserScreen: { username: string, id_user: number, status: boolean };
}

export const StackNav = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName="ScreenI"
            screenOptions={{
                headerMode: "float",
                headerShown: true,
                headerStyle:{
                    height: 50,
                    shadowColor: "black",
                    backgroundColor: "pink",
                    borderColor: "white",
                    borderWidth: 4,
                    borderRadius: 20,
                    opacity: 0.8                
                },
                headerTitleStyle:{
                    color: "white",
                    fontWeight: "bold" 
                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen
                name="ScreenI"
                component={ ScreenI }
                options={{ title: "Pantalla 1" }}
            />
            <Stack.Screen
                name="ScreenII"
                component={ ScreenII }
                options={{ title: "Pantalla 2" }}
            />
            <Stack.Screen
                name="ScreenIII"
                component={ ScreenIII }
                options={{ title: "Pantalla 3" }}
            />
            <Stack.Screen
                name="UserScreen"
                component={ UserScreen }
                options={{ title: "Datos del usuario" }}
            />
        </Stack.Navigator>
    );
}
