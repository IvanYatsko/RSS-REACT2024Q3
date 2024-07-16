import apiConstants from "../constants/apiConstants";
import IPokemonDetails from "../types/Pokemon/PokemonDetails";
import { IPokemons } from "../types/Pokemon/Pokemons";


export async function fetchPokemonsList(offset: number, limit: number) {
  const response = await fetch(`${apiConstants.API_URL}pokemon/?offset=${offset}&limit=${limit}`);
  const data: IPokemons = await response.json();
  return data.results;
}

export async function fetchPokemonDetails(url: string) {
  const response = await fetch(url);
  const data: IPokemonDetails = await response.json();
  return data;
}
