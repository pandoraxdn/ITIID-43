import React from 'react';
//import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { PokemonNavigator } from './src/navigator/PokemonNavigator';
//import { StackNav } from './src/navigator/StackNav';
//import { PrimerScreen } from './src/screens/PrimerScreen';
//import { MiPrimerDiseno } from './src/screens/MiPrimerDiseno';
//import { PrimerComponente } from './src/screens/PrimerComponente';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { ComponenteStyle } from './src/screens/ComponenteStyle';
//import { ContadorReducerScreen } from './src/screens/ContadorReducerScreen';
//import { MiPrimerScreen } from './src/screens/MiPrimerScreen-maestro';
//import { MiPrimerDiseno } from './src/screens/MiPrimerDiseno-maestro';
//import { MiPrimerContador } from './src/screens/MiPrimerContador-maestro';
//import { FormScreen } from './src/screens/FormScreen';
//import { TareaNavigator } from './src/navigator/TareaNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {

    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}

export default App;
