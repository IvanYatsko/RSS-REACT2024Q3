import { configureStore } from '@reduxjs/toolkit';
import { pokeApi } from './pokeapi/poke.api';
import { searchReducer } from './search/search.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokeReducer } from './pokeapi/poke.slice';

export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    search: searchReducer,
    poke: pokeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
