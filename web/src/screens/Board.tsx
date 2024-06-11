import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "./ScreenBase";
import { usePostsQuery } from "../api/posts";

const AnnouncementBoardScreen: React.FC = () => {
  const { data: posts, refetch: refetchPosts } = usePostsQuery();

  console.log(posts);

  return (
    <ScreenBase>
      <Flex>
        <Button colorScheme="blue">Create Announcement</Button>
        <Button colorScheme="blue">Edit Announcement</Button>
      </Flex>
    </ScreenBase>
  );
};

export default AnnouncementBoardScreen;
