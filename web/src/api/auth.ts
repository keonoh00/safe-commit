import { store } from "../store";
import {
  onChangeIsAuthenticated,
  onChangeHashedPassword,
  onChangeUsername,
} from "../store/reducer/authReducer";

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
      store.dispatch(onChangeIsAuthenticated(true));
      store.dispatch(onChangeUsername(username));
    }

    return response.data;
  } else {
    throw new Error("Invalid username or password");
  }
};

export const createAccountRequest = async ({
  name,
  username,
  password,
}: {
  name: string;
  username: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/create-account", {
    name,
    username,
    password,
  });

  if (response.data.username === username) {
    store.dispatch(onChangeIsAuthenticated(true));
    store.dispatch(onChangeUsername(username));
    store.dispatch(onChangeHashedPassword(response.data.hashedPassword)); // Server returns hashed password

    return response.data;
  } else {
    throw new Error("Failed to create account");
  }
};
