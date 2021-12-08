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
      if (state.value === 'light') {
        document.body.classList.add('dark');
        state.value = 'dark';
      } else {
        document.body.classList.remove('dark');
        state.value = 'light';
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
