import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum AuthState {
  UNAUTHENTICATED = "UNAUTHENTICATED",
  AUTHENTICATED = "AUTHENTICATED",
}

export interface AuthStoreState {
  authState: AuthState;
  username: string | null;
}

const initialState: AuthStoreState = {
  authState: AuthState.UNAUTHENTICATED,
  username: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthState: (state, action: PayloadAction<AuthState>) => {
      state.authState = action.payload;
    },
    onChangeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAuthState, onChangeUsername } = counterSlice.actions;

export default counterSlice.reducer;
