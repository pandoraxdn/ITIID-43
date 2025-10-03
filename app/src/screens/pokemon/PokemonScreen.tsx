import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../../navigator/PokemonNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useTypeColorPokemon } from '../../hooks/useTypeColorPokemon';
import { usePokemonDetail } from '../../hooks/usePokemonDetail';
import { PokemonDetail } from '../../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams,"PokemonScreen">{};

export const PokemonScreen = ( { navigation, route }: Props ) => {

    const { id, name, picture } = route.params;
    const { color, isLoading } = useTypeColorPokemon( id );
    const { isLoadingPokemon, pokemon } = usePokemonDetail( id );

    return(
        <View
            style={{ flex:1 }}
        >
            <View>
                <View
                    style={{ 
                        ...style.leftContainer,
                        backgroundColor: (isLoading) ? 'gray' : (color.length > 1) ? color[1] : color[ 0 ]
                    }}
                />
                <View
                    style={{ 
                        ...style.rightContainer,
                        backgroundColor: (isLoading) ? 'gray' : color[ 0 ]
                    }}
                />
            </View>
            {/* Header */}
            <View
                style={ style.headerContainer }
            >
                <TouchableOpacity
                    onPress={ () => navigation.goBack() }
                    style={ style.backBtn }
                >
                    <View>
                        <Text 
                            style={ style.row }
                        >
                            ←
                        </Text>
                        <Text
                            style={ style.pokemonName }
                        >
                            { name } { `\n#${id}` }
                        </Text>
                    </View>
                </TouchableOpacity>
                <Image
                    style={ style.pokeball }
                    source={ require('./../../../assets/pokeball-light.png') }
                />
                <Image
                    style={ style.pokemonImage }
                    source={{ uri: picture }}
                />
            </View>
            {/* Detail */}
            {
               (isLoadingPokemon)
               ? (
                 <ActivityIndicator
                     color="black"
                     size={ 60 }
                     style={{ height: 100 }}
                 />
               )
               : <PokemonDetail pokemon={ pokemon } />
            }
        </View>
    );
}

const style = StyleSheet.create({
    leftContainer: {
        position: "absolute",
        left: 0,
        height: 370,
        width: "50%",
        backgroundColor: "gray",
        borderBottomLeftRadius: 1000,
        //borderTopLeftRadius: 1000,
    },
    rightContainer: {
        position: "absolute",
        right: 0,
        height: 370,
        width: "50%",
        backgroundColor: "pink",
        //borderBottomRightRadius: 1000,
        borderTopRightRadius: 1000,
    },
    headerContainer:{
        alignItems: "center",
        height: 370,
        zIndex: 999,
        borderBottomRightRadius: 1000,
        borderTopLeftRadius: 1000,
    },
    backBtn: {
        position: "absolute",
        left: -10,
        top: -30
    },
    row: {
        color: "white",
        fontSize: 80,
        top: 20
    },
    pokeball: {
        height: 300,
        opacity: 0.7,
        width: 300,
        position: "absolute",
        top: 30
    },
    pokemonImage:{
        top: 65,
        height: 220,
        position: "absolute",
        width: 220
    },
    pokemonName: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "flex-start",
        top: 5,
        marginHorizontal: 12
    }
});

