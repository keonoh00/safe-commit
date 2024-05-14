import { store } from "../store";
import {
  AuthState,
  changeAuthState,
  onChangeUsername,
} from "../store/authStore";
import axiosInstance from "./axios";

export const requestLogin = async ({
  username,
  password,
  updateState = true,
}: {
  username: string;
  password: string;
  updateState?: boolean;
}) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });

  if (response.status === 200 && response.data.username === username) {
    if (updateState) {
      store.dispatch(changeAuthState(AuthState.AUTHENTICATED));
      store.dispatch(onChangeUsername(username));
    }

    return response.data;
  } else {
    throw new Error("Invalid username or password");
  }
};
