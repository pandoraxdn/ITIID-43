import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ConfigurationScreen = () => {

    const { authState } = useContext( AuthContext );

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <Text
                style={{
                    fontSize: 15
                }}
            >
                { JSON.stringify( authState ) }
            </Text>
        </View>
    );
}

