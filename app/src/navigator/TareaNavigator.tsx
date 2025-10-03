import { createStackNavigator } from "@react-navigation/stack";
import { FormScreen } from "../screens/tarea/FormScreen";

export type RootStackParams = {
    FormScreen:    undefined;
}

export const TareaNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName="FormScreen"
            screenOptions={{
                headerMode: "float",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="FormScreen"
                component={ FormScreen }
            />
        </Stack.Navigator>
    );
}
