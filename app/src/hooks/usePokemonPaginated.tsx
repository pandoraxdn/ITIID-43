import { useState, useRef, useEffect } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginateReponse, Results, NewPokemonList } from "../interfaces/pokemonInterfaces";

interface UsePokemonPaginated {
    isLoading:          boolean;
    simplePokemonList:  NewPokemonList[];
    loadPokemon:        () => void;
}

export const usePokemonPaginated = (): UsePokemonPaginated => {

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ simplePokemonList, setSimplePokemonList ] = useState<NewPokemonList[]>([]);

    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon");

    const loadPokemon = async () => {
        setIsLoading(true);
        const response = await pokemonApi.get<PokemonPaginateReponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList( response.data.results );
    }


    const mapPokemonList = ( PokemonList: Results[] ) => {

        const newPokemonList: NewPokemonList[] = PokemonList.map( ({ name, url }) => {
            // https://pokeapi.co/api/v2/pokemon/1
            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`
            return {
                id,
                name,
                picture
            }
        });

        setSimplePokemonList( (prevList) => [ ...prevList, ...newPokemonList ] );

        setIsLoading(false);

    }

    useEffect(() => {
        loadPokemon();
    },[]);

    return { isLoading, simplePokemonList, loadPokemon };
}
