import React, { createContext, useReducer, ReactNode } from 'react';
import { ActionType, StateType } from '../types/state';
import {
  GET_POKEMONS_LIST,
  SET_INITIAL_SEARCH_VALUE,
  SET_SEARCH_VALUE,
} from '../constants/actionConstants';
import IPokemonDetails from '../types/Pokemon/pokemonDetails';

const initialState: StateType = { searchValue: '', pokemonList: [] };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case GET_POKEMONS_LIST:
      return { ...state, pokemonList: action.payload as IPokemonDetails[] };
    case SET_INITIAL_SEARCH_VALUE:
      return { ...state, searchValue: action.payload as string };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload as string };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};
