import { createStackNavigator } from "@react-navigation/stack";
import { FormUser } from "../screens/users/FormUser";
import { HomeUser } from "../screens/users/HomeUser";
import { UserResponse } from "../interfaces/userInterfaces";

export type RootStackParams = {
    FormUser:     UserResponse;
    HomeUser:     undefined;
}

export const UserNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return(
        <Stack.Navigator
            initialRouteName="HomeUser"
            screenOptions={{
                headerMode: "float",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="FormUser"
                component={ FormUser }
            />
            <Stack.Screen
                name="HomeUser"
                component={ HomeUser }
            />
        </Stack.Navigator>
    );
}
