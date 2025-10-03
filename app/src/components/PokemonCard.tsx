import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NewPokemonList } from '../interfaces/pokemonInterfaces';
import { useNavigation } from '@react-navigation/native';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';

export const PokemonCard = ( { id, name, picture } : NewPokemonList ) => {

    const pokemon: NewPokemonList = { id, name, picture };

    const { color, isLoading } = useTypeColorPokemon( id );

    console.log(color);

    const widthWindows = Dimensions.get("window").width;
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={ () => { navigation.navigate("PokemonScreen", pokemon ) } }
        >
            <View
                style={{
                    ...style.containerCard,
                    width: widthWindows * 0.4,
                }}
            >
                <View
                    style={{
                        ...style.backGroundTop,
                        backgroundColor: (isLoading) ? 'gray' : (color.length > 1) ? color[1] : color[0] 
                    }}
                />
                <View
                    style={{
                        ...style.backGroundBottom,
                        backgroundColor: (isLoading) ? 'pink' : color[0] 
                    }}
                />
                <Image
                    style={ style.pokeball }
                    source={ require('./../../assets/pokeball-dark.png') }
                />
                <Text
                    style={ style.text }
                >
                    { `${name}` }
                    { `\n#${id}` }
                </Text>
                <Image
                    style={ style.pokemon }
                    source={{ uri: picture }}
                />
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    containerCard: {
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden"
    },
    backGroundTop:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "50%",
        backgroundColor: "gray",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    backGroundBottom:{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "pink",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    pokemon: {
        height: 75,
        width: 75,
        position: "absolute",
        right: -8,
        bottom: -5
    },
    text: {
        marginHorizontal: 10,
        color: "white",
        fontSize: 22
    },
    pokeball: {
        height: 110,
        width: 110,
        position: "absolute",
        bottom: -20,
        right: -20,
        opacity: 0.5
    }
});

