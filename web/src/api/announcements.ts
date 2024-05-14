// import { useQuery } from "@tanstack/react-query";
// import { QUERY_KEY } from "../constants/queryKey";
// import axiosInstance from "./axios";
// import { AxiosResponse } from "axios";

export interface AnnouncementPostType {
  title: string;
  content: string;
  createdAt: Date;
}

// const getAnnouncements = async () => {
//   const response: AxiosResponse<AnnouncementPostType[]> =
//     await axiosInstance.get("/");
//   console.log(response);

//   return response.data;
// };

// export const useAnnouncementsQuery = () => {
//   const { data, error } = useQuery<AnnouncementPostType[]>({
//     queryKey: [QUERY_KEY.ANNOUNCEMENTS],
//     queryFn: getAnnouncements,
//   });

//   return { data, error };
// };
