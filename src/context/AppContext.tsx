import React, { createContext, useReducer, ReactNode } from 'react';
import { SET_SEARCH_VALUE } from '../constants/action';
import { ActionType, StateType } from '../types/state';

const initialState: StateType = { count: 0, searchValue: '' };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    // case 'increment':
    //   return { ...state, count: state.count + (action.payload || 1) };
    // case 'decrement':
    //   return { ...state, count: state.count - (action.payload || 1) };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
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
