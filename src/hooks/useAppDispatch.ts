import { useContext } from 'react';
import { ActionType } from '../types/state';
import { AppContext } from '../context/AppContext';

export const useAppDispatch = (): React.Dispatch<ActionType> => {
  const { dispatch } = useContext(AppContext);
  if (!dispatch) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return dispatch;
};
