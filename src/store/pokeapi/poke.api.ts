import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPokemonResult, IPokemons } from '../../types/Pokemon/pokemons';
import IPokemonDetails from '../../types/Pokemon/pokemonDetails';

export const pokeApi = createApi({
  reducerPath: 'pokeapi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: build => ({
    pokemons: build.query<IPokemonResult[], number>({
      query: (offset: number) => ({
        url: 'https://pokeapi.co/api/v2/pokemon',
        params: { offset },
      }),
      transformResponse: (response: IPokemons) => response.results,
    }),
    pokemonDetails: build.query<IPokemonDetails, string>({
      query: (url: string) => ({
        url,
      }),
    }),
  }),
});

export const { usePokemonsQuery, useLazyPokemonDetailsQuery } = pokeApi;
