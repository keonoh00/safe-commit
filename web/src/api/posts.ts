import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios";
import { QUERY_KEY } from "./key";

export interface PostType {
  title: string;
  content: string;
  createdAt: Date;
}
export const usePostsQuery = () => {
  const { data, refetch } = useQuery<PostType[]>({
    queryKey: [QUERY_KEY.POSTS],
    queryFn: () => axiosInstance.get("/posts").then((res) => res.data),
  });

  return { data, refetch };
};

export const usePostQuery = (id: string) => {
  const { data, refetch } = useQuery<PostType>({
    queryKey: [QUERY_KEY.POST, id],
    queryFn: () => axiosInstance.get(`/posts/${id}`).then((res) => res.data),
  });

  return { data, refetch };
};
