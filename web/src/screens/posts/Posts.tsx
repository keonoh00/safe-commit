import { Flex } from "@chakra-ui/react";
import React from "react";
import ScreenBase from "../ScreenBase";
import IPostPreviewBlock from "../../components/posts/IPostPreviewBlock";

const DUMMY_DATA = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    author: "hello",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    author: "world",
  },
  {
    id: 2,
    title: "Third Post",
    content:
      "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong content here",
    author: "world",
  },
];

const PostsScreen: React.FC = () => {
  return (
    <ScreenBase>
      <Flex flexDirection={"column"}>
        <IPostPreviewBlock
          header
          post={{
            id: 0,
            title: "Title",
            content: "Content",
            author: "Author",
          }}
        />
        {DUMMY_DATA.map((post) => (
          <IPostPreviewBlock key={post.id} post={post} />
        ))}
      </Flex>
    </ScreenBase>
  );
};

export default PostsScreen;
