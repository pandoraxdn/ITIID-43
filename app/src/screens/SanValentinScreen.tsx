import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SanValentinScreen = () => {

    const  [ hora, setHora ] = useState( new Date() );
    const [ bgColor, setBgColor ] = useState<string>();
    const colors = [ "white", "green", "black", "red" ];

    const random = () => {
        const color = colors[ Math.floor( Math.random() * colors.length ) ];
        setBgColor(color);
    }

    useEffect( () => {
        const interval = setInterval( () => {
            setHora(new Date);
            return () => clearInterval(interval);
        },1000);
        const intervalColor = setInterval( () => {
            random();
            return () => clearInterval(intervalColor);
        },400);
    },[]);

    return(
        <View
            style={ style.root }
        >
            <Text
                style={{
                    ...style.texto,
                    color: bgColor
                }}
            >
                My love
            </Text>
            <Text
                style={{
                    ...style.texto,
                    color: bgColor
                }}
            >
                Keira
            </Text>
            <Text
                style={{
                    ...style.texto,
                    color: bgColor
                }}
            >
                { hora.toLocaleTimeString() }
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    texto: {
        fontSize: 60,
        color: "white"
    }
});

