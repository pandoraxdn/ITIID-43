import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { File } from "expo-file-system";

interface UseImagePicker {
  imagen64: string;
  pickImage: () => void;
}

export const useImagePicker = (): UseImagePicker => {

    const [imagen64, setImagen64] = useState<string>("");

    const pickImage = async () => {

        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        (status !== "granted") &&
        Alert.alert(
            "Permisos requeridos",
            "Se requieren permisos para usar la cámara",
            [{ text: "Aceptar" }]
        );

        (status === "granted") &&
        (async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.9,
                base64: true,
            });

            (!result.canceled) &&
            (() => {
                const file = new File(result.assets[0].uri);
                const base64 = file.base64Sync();
                setImagen64(base64);
            })();
        })();

  };

  return { imagen64, pickImage };

};
