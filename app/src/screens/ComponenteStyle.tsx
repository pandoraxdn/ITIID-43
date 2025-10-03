import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { appTheme } from '../themes/appTheme';

export const ComponenteStyle = () => {

    const colors = [ "blue", "red", "violet", "orange", "yellow" ];

    const [ bgColor, setBgColor ] = useState<string>("");

    const random = () => {
        const color = colors[ Math.floor(Math.random() * colors.length) ];
        setBgColor(color);
    }

    useEffect( () => {
        const interval = setInterval(() => {
            random();
            return () => clearInterval(interval);
        },200);
    },[]);

    return(
        <View
            style={appTheme.marginGlobal}
        >
            <View
                style={{
                    backgroundColor: "blue",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    alignSelf: "flex-end",
                    borderColor: "black",
                    borderWidth: 7,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    style={{
                        ...style.photo,
                        borderColor: bgColor
                    }}
                    source={ require('./../../assets/a.jpg') }
                />
            </View>
            <View
                style={{
                    backgroundColor: "violet",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    borderColor: "black",
                    borderWidth: 7,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    style={{
                        ...style.photo,
                        borderColor: bgColor
                    }}
                    source={ require('./../../assets/b.jpg') }
                />
            </View>
            <View
                style={{
                    alignItems: "center",
                    backgroundColor: "pink",
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    alignSelf: "center",
                    borderColor: "black",
                    borderWidth: 7,
                    justifyContent: "center",
                }}
            >
                <Image
                    style={{
                        ...style.photo,
                        borderColor: bgColor
                    }}
                    source={ require('./../../assets/c.jpeg') }
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    photo: {
        width: 95,
        height: 95,
        borderRadius: 60,
        borderColor: "white",
        borderWidth: 5
    }
});

