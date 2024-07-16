import { useContext } from 'react';
import { StateType } from '../types/state';
import { AppContext } from '../context/AppContext';

type Selector<T> = (state: StateType) => T;

export const useAppContext = <T>(selector: Selector<T>): T => {
  const { state } = useContext(AppContext);
  if (!state) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return selector(state);
};
