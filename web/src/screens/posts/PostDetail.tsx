import { Box, Flex, SkeletonText, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScreenBase from "../ScreenBase";
import { useParams } from "react-router-dom";
import { PostFullType, requestPostById } from "../../api/posts";

const PostDetailScreen: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const param = useParams<{ id: string }>();
  const [postContent, setPostContent] = React.useState<PostFullType>();

  useEffect(() => {
    const getPostData = async () => {
      if (!param.id) return;

      const postRawData = await requestPostById(param.id);
      setPostContent(postRawData);

      if (divRef.current && postRawData.iframe) {
        divRef.current.innerHTML = postRawData.iframe;
      }
    };
    getPostData();
  }, [param.id]);

  return (
    <ScreenBase>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {postContent?.iframe && <div ref={divRef}></div>}
        {postContent && (
          <>
            <Box
              borderWidth={1}
              width={"100%"}
              paddingBlock={3}
              marginBlock={1}
              paddingInline={2}
            >
              <Text fontWeight={"900"}>Title: {postContent.title}</Text>
            </Box>
            <Box
              borderWidth={1}
              width={"100%"}
              paddingBlock={3}
              marginBlock={1}
              paddingInline={2}
            >
              <Text>{postContent.content}</Text>
            </Box>
            <Box
              borderWidth={1}
              width={"100%"}
              paddingBlock={3}
              marginBlock={1}
              paddingInline={2}
            >
              <Text>{postContent.username}</Text>
            </Box>
          </>
        )}
      </Flex>
    </ScreenBase>
  );
};

export default PostDetailScreen;
