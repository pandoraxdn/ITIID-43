import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { PokemonCard } from '../../components/PokemonCard';

export const HomePokemon = () => {

    const { simplePokemonList, loadPokemon } = usePokemonPaginated();

    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <FlatList
                data={ simplePokemonList }
                keyExtractor={ (pokemon, index) => `${pokemon.id}${index}` }
                // Header
                ListHeaderComponent={(
                    <View>
                        <Image
                            style={{ 
                                height: 300, 
                                width: 300,
                                top: -100,
                                right: -100,
                                position: "absolute"
                            }}
                            source={ require("./../../../assets/pokeball-dark.png") }
                        />
                        <Text
                            style={{
                                marginTop: 20,
                                fontWeight: "bold",
                                fontSize: 40,
                                marginHorizontal: 10
                            }}
                        >
                            Pokedex
                        </Text>
                    </View>
                )}
                // Body
                showsVerticalScrollIndicator={false}
                numColumns={2} // OJO si hago un cambio reiniciar app 
                renderItem={ ({item}) => (
                    <PokemonCard
                        {...item}
                    />
                )}
                // Footer
                onEndReached={ loadPokemon }
                onEndReachedThreshold={ 0.2 }
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 120 }}
                        size={ 50 }
                        color="pink"
                    />
                )}
            />
        </View>
    );
}
