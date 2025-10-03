import React from "react";
import { View, Text, Image } from "react-native";

const amor:string = "Irais";

export const MiPrimerDiseno = () => {
    return (
        <View
            style={{
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "pink"
            }}
        >
            <Text
                style={{
                    fontSize: 60,
                    color: "white"
                }}
            >
                {amor}
            </Text>
            <Image
                style={{
                    height: 300,
                    width: 300,
                    borderRadius: 200
                }}
                source={
                    require('./../../assets/gato.jpg')
                }
            />
        </View>
    );
}
