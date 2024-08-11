import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchSectionState {
  searchValue: string;
}

const initialState: SearchSectionState = {
  searchValue: localStorage.getItem('searchValue') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
