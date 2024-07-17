import apiConstants from '../constants/api';
import { IPokemonDetails, IPokemonResult, IPokemons } from '../types/Pokemon/Pokemons';

export const fetchPokemonsList = async (offset: number): Promise<IPokemonResult[]> => {
  const response = await fetch(`${apiConstants.API_URL}pokemon/?offset=${offset}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: IPokemons = await response.json();
  return data.results;
};

export async function fetchPokemonDetails(url: string) {
  const response = await fetch(url);
  const data: IPokemonDetails = await response.json();
  return data;
}
