import apiConstants from '../constants/apiConstants';
import IPokemonDetails from '../types/Pokemon/pokemonDetails';
import { IPokemons } from '../types/Pokemon/pokemons';

export async function fetchPokemonsList(offset: number) {
  const response = await fetch(`${apiConstants.API_URL}pokemon/?offset=${offset}`);
  const data: IPokemons = await response.json();
  return data.results;
}

export async function fetchPokemonDetails(url: string) {
  const response = await fetch(url);
  const data: IPokemonDetails = await response.json();
  return data;
}
