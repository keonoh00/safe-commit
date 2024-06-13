import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "../ScreenBase";
import IPostPreviewBlock from "../../components/posts/IPostPreviewBlock";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes";
import { PostFullType, requestPosts } from "../../api/posts";

const PostsScreen: React.FC = () => {
  const [postData, setPostData] = React.useState<PostFullType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await requestPosts(0);
      setPostData(posts);
    };
    getPosts();
  }, []);
  return (
    <ScreenBase>
      <Flex justifyContent={"flex-end"}>
        <Button onClick={() => navigate(PATH.CREATE_POST)}>Create Post</Button>
      </Flex>
      <Flex flexDirection={"column"}>
        <IPostPreviewBlock
          header
          post={{
            id: "header",
            title: "Title",
            content: "Content",
            username: "Author",
            iframe: "",
            createdAt: new Date(),
          }}
        />
        {postData
          ? postData.map((post) => (
              <IPostPreviewBlock key={post.id} post={post} />
            ))
          : null}
      </Flex>
    </ScreenBase>
  );
};

export default PostsScreen;
