import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePokemon } from "../screens/pokemon/HomePokemon";
import { PokemonScreen } from "../screens/pokemon/PokemonScreen";

export type RootStackParams = {
    HomePokemon:    undefined;
    PokemonScreen:  { name: string, id: string | number, picture: string };
}

export const PokemonNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName="HomePokemon"
            screenOptions={{
                headerMode: "float",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="HomePokemon"
                component={ HomePokemon }
            />
            <Stack.Screen
                name="PokemonScreen"
                component={ PokemonScreen }
            />
        </Stack.Navigator>
    );
}
