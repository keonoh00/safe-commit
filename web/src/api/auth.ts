import store from "../store";
import {
  onChangeHashedPassword,
  onChangeIsAuthenticated,
  onChangeUsername,
} from "../store/reducer/authReducer";

import axiosInstance from "./axios";

export const requestLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });

  if (response.data.username && response.data.hashedPassword) {
    store.dispatch(onChangeIsAuthenticated(true));
    store.dispatch(onChangeUsername(username));
    store.dispatch(onChangeHashedPassword(response.data.hashedPassword));

    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};

export const requestLogout = async () => {
  const response = await axiosInstance.get("/auth/logout");

  if (response.data.message === "Logged out") {
    store.dispatch(onChangeIsAuthenticated(false));
    store.dispatch(onChangeUsername(""));
    store.dispatch(onChangeHashedPassword(""));
  } else {
    throw new Error("Failed to logout");
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

  if (response.data.username && response.data.hashedPassword) {
    store.dispatch(onChangeUsername(response.data.username));
    store.dispatch(onChangeHashedPassword(response.data.hashedPassword));
    store.dispatch(onChangeIsAuthenticated(true));
  }

  return response.data;
};
