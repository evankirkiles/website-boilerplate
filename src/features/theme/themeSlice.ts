import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const THEMES: ThemeData[] = [
  {
    name: 'LIGHT',
    background: '#B0B0B0',
    text: '#606060',
    filter: 'grayscale(100%) invert(0%) brightness(100%)'
  },
  {
    name: 'DARK',
    background: '#303030',
    text: '#B0B0B0',
    filter: 'grayscale(100%) invert(0%) brightness(100%)'
  }
];

export interface ThemeData {
  name: string,
  background: string,
  text: string,
  filter: string
}

interface ThemeState {
  theme: number
}

const initialState: ThemeState = {
  theme: 0
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<number>) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => THEMES[state.theme.theme]
export default themeSlice.reducer;