import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthStoreState {
  isAuthenticated: boolean;
  username: string | null;
}

const initialState: AuthStoreState = {
  isAuthenticated: false,
  username: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChangeIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    onChangeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChangeIsAuthenticated, onChangeUsername } =
  counterSlice.actions;

export default counterSlice.reducer;
