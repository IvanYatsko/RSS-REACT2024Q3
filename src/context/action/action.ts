import { fetchPokemonDetails, fetchPokemonsList } from '../../api/api';
import {
  GET_POKEMONS_LIST,
  SET_INITIAL_SEARCH_VALUE,
  SET_SEARCH_VALUE,
} from '../../constants/actionConstants';
import { ActionType } from '../../types/state';

export const setSearchValue = (value: string) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const setInitialSearchValue = (value: string) => ({
  type: SET_INITIAL_SEARCH_VALUE,
  payload: value,
});

export const getPokemonsList = async (
  offset = 0,
  dispatch: React.Dispatch<ActionType>,
) => {
  try {
    const response = await fetchPokemonsList(offset);
    const pokemonDetailsRequests = response.map(pokemon =>
      fetchPokemonDetails(pokemon.url),
    );
    const pokemonDetails = await Promise.all(pokemonDetailsRequests);
    dispatch({
      type: GET_POKEMONS_LIST,
      payload: pokemonDetails,
    });
  } catch (e) {
    console.error('Error fetching Pokémon list:', e);
    throw new Error(e instanceof Error ? e.message : 'error');
  }
};
