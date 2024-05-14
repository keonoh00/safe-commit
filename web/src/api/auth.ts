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
  return response;
};
