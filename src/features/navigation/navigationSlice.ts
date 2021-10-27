import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface NavigationState {
  open: boolean
}

const initialState: NavigationState = {
  open: true
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    setNavigation: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    }
  }
})

export const { setNavigation } = navigationSlice.actions;
export const selectNavigationOpen = (state: RootState) => state.navigation.open;
export default navigationSlice.reducer;
