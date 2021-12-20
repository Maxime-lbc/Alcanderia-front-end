import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: 'light' | 'dark';
}

const initialState: ThemeState = { value: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state: ThemeState) => {
      document.body.classList.toggle('dark');
      if (state.value === 'light') state.value = 'dark';
      else state.value = 'light';
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
