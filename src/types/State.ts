import { IPokemonDetails } from './Pokemon/Pokemons';

export interface IState {
  hasError: boolean;
}
export type StateType = {
  searchValue: string;
  pokemonList: IPokemonDetails[];
};

export type ActionType = {
  type: string;
  payload?: string | number | IPokemonDetails[];
};
