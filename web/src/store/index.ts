import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./reducer/authReducer";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  authState: authReducer,
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
