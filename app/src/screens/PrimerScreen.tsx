import { View, Text } from "react-native";

let edad:number = 20;
let nombre_alumno:string|number = "Adi";
nombre_alumno = 20;
console.log(edad, nombre_alumno);

const usuario:[number,string,boolean] = [1,"Bianca",true];
const [id, nombre, estado] = usuario;

export const PrimerScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{ fontSize: 30 }}
            >
                {id}
            </Text>
            <Text
                style={{ fontSize: 30 }}
            >
                {nombre}
            </Text>
            <Text
                style={{ fontSize: 30 }}
            >
                {(estado) ? "Verdadero" : "Falso"}
            </Text>
        </View>
    );
}
