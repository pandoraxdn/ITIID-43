import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Animated, Image } from 'react-native';
import { useUserLogin } from '../../hooks/useUserLogin';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';

export const LoginScreen = () => {

    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(progress, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, []);

    const animatedBorderColor = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ["#FFFFFF", "#EE82EE"],
    });

    const { 
        isLoading,
        state,
        handleInputChange,
        handleLogin,
        request 
    } = useUserLogin();

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <View
                style={ appTheme.container }
            >
                <Animated.View
                    style={{
                        borderWidth: 20,
                        borderRadius: 30,
                        borderColor: animatedBorderColor
                    }}
                >
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 25
                        }}
                        source={ require("./../../../assets/login.png") }
                    />
                </Animated.View>
                {
                    (isLoading) &&
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={ 100 }
                        color="violet"
                    />
                }
                {
                    (request === false) &&
                    <Text
                        style={{
                            ...appTheme.title,
                            color: "red"
                        }}
                    >
                        { "Contraseña Incorrecta\n" }
                        { "Datos Invalidos\n" }
                    </Text>
                }
                <TextInput
                    style={ appTheme.textInput }
                    value={ state.email }
                    placeholder='Correo'
                    keyboardType="email-address"
                    editable={ !isLoading }
                    onChangeText={ (texto) => handleInputChange("email",texto) }
                />
                <TextInput
                    style={ appTheme.textInput }
                    value={ state.password }
                    placeholder='Contraseña'
                    keyboardType="default"
                    editable={ !isLoading }
                    secureTextEntry={true}
                    onChangeText={ (texto) => handleInputChange("password",texto) }
                />
                <BtnTouch
                    titulo='Login'
                    action={ () => handleLogin() }
                    color='violet'
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({

});

