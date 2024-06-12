import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IPostPreviewBlockProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
  };
  header?: boolean;
}

const IPostPreviewBlock = ({ post, header }: IPostPreviewBlockProps) => {
  const navigate = useNavigate();
  const navigateToPost = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <button onClick={navigateToPost}>
      <Flex
        borderBottomWidth={header ? 2 : 1}
        borderBottomColor={header ? "black" : undefined}
        padding={3}
        flex={1}
      >
        <Text
          noOfLines={1}
          width={"10%"}
          marginInline={"5%"}
          textAlign={"center"}
        >
          {post.title}
        </Text>
        <Text
          noOfLines={1}
          width={"50%"}
          marginInline={"5%"}
          textAlign={"center"}
        >
          {post.content}
        </Text>
        <Text
          noOfLines={1}
          width={"10%"}
          marginInline={"5%"}
          textAlign={"center"}
        >
          {post.author}
        </Text>
      </Flex>
    </button>
  );
};

export default IPostPreviewBlock;
