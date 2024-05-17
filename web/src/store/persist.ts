// reducers/index.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import authReducer from "./reducer/authReducer";

const persistConfig = {
  key: "root",
  // sessionStorage에 저장합니다.
  storage: sessionStorage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["auth"],
  // blacklist -> 그것만 제외합니다
};
export const rootReducer = combineReducers({
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
