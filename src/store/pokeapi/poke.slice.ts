import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokeState {
  selectedItems: number[];
}

const initialState: PokeState = {
  selectedItems: [],
};

export const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    cleareSelectedValue: state => {
      state.selectedItems = [];
    },
    addSelectedValue: (state, action: PayloadAction<number>) => {
      state.selectedItems = [...state.selectedItems, action.payload];
    },
    deleteSelectedValue: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(item => item !== action.payload);
    },
  },
});

export const pokeAction = pokeSlice.actions;
export const pokeReducer = pokeSlice.reducer;
