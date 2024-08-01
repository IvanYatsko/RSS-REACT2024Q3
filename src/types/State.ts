import IPokemonDetails from './Pokemon/pokemonDetails';

interface IState {
  hasError: boolean;
}

interface StateType {
  searchValue: string;
  pokemonList: IPokemonDetails[];
}

interface ActionType {
  type: string;
  payload?: string | number | IPokemonDetails[];
}

export type { StateType, ActionType, IState };
