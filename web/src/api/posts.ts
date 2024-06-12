import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { QUERY_KEY } from "./key";
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

export const usePostsQuery = () => {
  const { data, refetch } = useQuery<PostFullType[]>({
    queryKey: [QUERY_KEY.POSTS],
    queryFn: () => axiosInstance.get("/posts").then((res) => res.data),
  });

  return { data, refetch };
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
