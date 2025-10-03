import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { PokemonSimple } from '../interfaces/pokemonInterfaces';
import { TypePokemon } from '../hooks/useTypeColorPokemon';

interface Props{
    pokemon: PokemonSimple;
}

export const PokemonDetail = ( { pokemon }: Props ) => {

    const tipo: TypePokemon[] = [
        {'name':'normal', 'color':'#A8A878'},
        {'name':'fighting', 'color':'#C03028'},
        {'name':'flying', 'color':'#A890F0'},
        {'name':'poison', 'color':'#A040A0'},
        {'name':'ground', 'color':'#E0C068'},
        {'name':'rock', 'color':'#B8A038'},
        {'name':'bug', 'color':'#A8B820'},
        {'name':'ghost', 'color':'#705898'},
        {'name':'steel', 'color':'#B8B8D0'},
        {'name':'fire', 'color':'#F08030'},
        {'name':'water', 'color':'#6890F0'},
        {'name':'grass', 'color':'#78C850'},
        {'name':'electric', 'color':'#F8D030'},
        {'name':'psychic', 'color':'#F85888'},
        {'name':'ice', 'color':'#98D8D8'},
        {'name':'dragon', 'color':'#7038F8'},
        {'name':'dark', 'color':'#705848'},
        {'name':'fairy', 'color':'#EE99AC'},
        {'name':'default', 'color':'#68A090'},    
    ];

    const findColorType = ( name: string ) => {
        const type:TypePokemon = tipo.find( (element) => {
            return element.name == name
        });
        return type.color;
    }

    return(
        <ScrollView
            style={{ ...StyleSheet.absoluteFillObject }}
        >
            {/*Type*/}
            <View>
                <Text
                    style={{
                        marginTop: 380,
                        marginHorizontal: 20
                    }}
                >
                    Type(s) 
                </Text>
                <View
                    style={{ flexDirection: "row" }}
                >
                    {
                        (pokemon.types) &&
                        pokemon.types.map( ({type}) => (
                            <Text
                                key={type.name}
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                    marginRight: 10,
                                    marginHorizontal: 20, 
                                    borderRadius: 5,
                                    textAlign: "center",
                                    backgroundColor: findColorType( type.name ),
                                    width: 80,
                                }}
                            >
                                { type.name }
                            </Text>
                        ))
                    }
                </View>
                <View>
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            marginTop: 5
                        }}
                    >
                        Weight
                    </Text>
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20
                        }}
                    >
                        {
                            (pokemon.weight) &&
                            pokemon.weight + " lb"
                        }
                    </Text>
                </View>
                <View>
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontSize: 20,
                            marginTop: 5
                        }}
                    >
                        Sprites
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ ...StyleSheet.absoluteFillObject }}
                    >
                        {
                            (pokemon.sprites) && (
                                <View
                                    style={{ flexDirection: "row" }}
                                >
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri: pokemon.sprites.front_shiny }}
                                    />
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri: pokemon.sprites.back_shiny }}
                                    />
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri: pokemon.sprites.back_default }}
                                    />
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{ uri: pokemon.sprites.front_default }}
                                    />
                                    {
                                        (pokemon.sprites.front_female) && (
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: pokemon.sprites.front_female }}
                                        />
                                        )
                                    }
                                    {
                                        (pokemon.sprites.back_female) && (
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: pokemon.sprites.back_female }}
                                        />
                                        )
                                    }
                                </View>
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({

});

