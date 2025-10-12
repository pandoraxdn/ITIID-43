import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import * as ImageP from "expo-image-picker"
import { File } from "expo-file-system";
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from '../components/BtnTouch';

export const ImagePicker = () => {

    const [image64, setImage64] = useState<string|null>(null);

    useEffect(() => {
        ( async () => {
            const {status} = await ImageP.getCameraPermissionsAsync();
            if( status !== "granted" ){
                Alert.alert(
                    "Permiso requerido",
                    "Debes otorgar el permiso para acceder a la galería de imágenes"
                );
            }
        })();
    },[]);

    const pickImage = async () => {
        let result = await ImageP.launchImageLibraryAsync({
            mediaTypes: [ "images" ],
            aspect: [ 4, 3 ],
            quality: 0.9
        });

        ( !result.canceled ) && ( async () => {
            const file = new File(result.assets[0].uri);
            const base64 = await file.base64();
            setImage64(base64);
        })();
    }

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <Text
                style={appTheme.title}
            >
                Seleccionar imagen
            </Text>
            <BtnTouch
                titulo='Imagen'
                color='violet'
                action={() => pickImage() }
            />
            {
                (image64 != null) && (
                    <Image
                        style={appTheme.avatar}
                        source={{
                            uri: `data:image/png;base64,${image64}`
                        }}
                    />
                )
            }
        </View>
    );
}
