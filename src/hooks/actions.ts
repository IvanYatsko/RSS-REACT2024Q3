import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { searchAction } from '../store/search/search.slice';
import { pokeAction } from '../store/pokeapi/poke.slice';

const actions = { ...searchAction, ...pokeAction };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
