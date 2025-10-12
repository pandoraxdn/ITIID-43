import { StyleSheet, TextInput } from "react-native";

export const appTheme = StyleSheet.create({
    marginGlobal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        height: 50,
        width: 280,
        margin: 5,
        borderWidth: 5,
        borderColor: "violet",
        color: "black"
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 10,
        borderColor: "white"
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    menuBtn:{
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: 250,
        justifyContent: "center",
        borderColor: "white"
    },
    textBtn:{
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
});
