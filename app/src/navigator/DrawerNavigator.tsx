import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNav } from "./StackNav";
import { PokemonNavigator } from "./PokemonNavigator";
import { TareaNavigator } from "./TareaNavigator";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";
import { UserNavigator } from "./UserNavigator";
import { ConfigurationScreen } from "../screens/ConfigurationScreen";
import { LoginScreen } from "../screens/user/LoginScreen";
import { GraficosScreen } from "../screens/char/GraficosScreen";
import { SensorData } from "../screens/char/SensorData";
//import { LoginScreenII } from "../screens/user/LoginScreenII";


export type RootDrawerNavigator = {
    StackNav:               undefined;
    PokemonNavigator:       undefined;
    TareaNavigator:         undefined;
    ImagePickerScreen:      undefined;
    UserNavigator:          undefined;
    ConfigurationScreen:    undefined;
    GraficosScreen:         undefined;
    SensorData:             undefined;
}

const Navigator = () => {

    const Drawer = createDrawerNavigator<RootDrawerNavigator>();
    const { width } = useWindowDimensions();

    return( 
        <Drawer.Navigator
            initialRouteName="PokemonNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? "permanent" : "front",
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: "rgba(255,72,208,0.3)",
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
                name="ImagePickerScreen"
                component={ImagePickerScreen}
            />
            <Drawer.Screen
                name="UserNavigator"
                component={UserNavigator}
            />
            <Drawer.Screen
                name="ConfigurationScreen"
                component={ConfigurationScreen}
            />
            <Drawer.Screen
                name="GraficosScreen"
                component={GraficosScreen}
            />
            <Drawer.Screen
                name="SensorData"
                component={SensorData}
            />
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    //const { authState } = useContext( AuthContext );
    return <Navigator/>;
    //return ( authState.isLoggedIn ) ? <Navigator/> : <LoginScreen/>;
}
