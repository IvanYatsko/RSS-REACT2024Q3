import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ActionType } from '../types/state';

export const useAppDispatch = (): React.Dispatch<ActionType> => {
  const { dispatch } = useContext(AppContext);
  if (!dispatch) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return dispatch;
};
