import axiosInstance from "./axios";
import store from "../store";

export interface CreatePostType {
  title: string;
  content: string;
  iframe: string;
}

export interface PostFullType extends CreatePostType {
  id: string;
  createdAt: Date;
  username: string;
}

export const requestPosts = async (page: number) => {
  const response = await axiosInstance.get(`/posts?page=${page}`);
  return response.data;
};

export const requestPostById = async (id: string) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const requestCreatePost = async (post: CreatePostType) => {
  const userHashedPassword = store.getState().auth.hashedPassword;
  const username = store.getState().auth.username;

  const response = await axiosInstance.post("posts/create-post", {
    ...post,
    username,
    hashedPassword: userHashedPassword,
  });
  return response;
};
