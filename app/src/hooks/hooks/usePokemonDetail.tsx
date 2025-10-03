import { useState, useEffect } from "react";
import { PokemonSimple } from "../interfaces/pokemonInterfaces";
import { pokemonApi } from "../api/pokemonApi";

interface UsePokemonDetail{
    isLoadingPokemon: boolean;
    pokemon:          PokemonSimple;
}

export const usePokemonDetail = ( id: string | number ): UsePokemonDetail => {

    const [ isLoadingPokemon, setIsLoadingPokemon ] = useState<boolean>(false);
    const [ pokemon, setPokemon ] = useState<PokemonSimple>({} as PokemonSimple);

    const loadPokemon = async () => {
        setIsLoadingPokemon(true);
        const response = await pokemonApi.get<PokemonSimple>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon( response.data );
        setIsLoadingPokemon(false);
    }

    useEffect( () => {
        loadPokemon();
    },[]);

    return { isLoadingPokemon, pokemon };
}
