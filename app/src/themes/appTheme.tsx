import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
    globalContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        height: 60,
        width: 280,
        borderWidth: 5,
        borderColor: "pink",
        marginTop: 5
    }
});
